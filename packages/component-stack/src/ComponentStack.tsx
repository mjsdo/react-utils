import type { ComponentStackItemState } from './useComponentStacks';
import type { PropsWithChildren } from 'react';

import { createContext } from '@radix-ui/react-context';
import React, { Fragment, memo } from 'react';

import { useComponentStacks } from './useComponentStacks';

type ComponentStackValueContext = Pick<
  ReturnType<typeof useComponentStacks>,
  'stacks'
>;
type SetComponentStackContext = Omit<
  ReturnType<typeof useComponentStacks>,
  'stacks'
>;

const [ComponentStackValueProvider, useComponentStackValueContext] =
  createContext<ComponentStackValueContext>('ComponentStackProvider');

const [SetComponentStackProvider, useSetComponentStackContext] =
  createContext<SetComponentStackContext>('ComponentStackProvider');

const useComponentStackValue = (stackKey: string) => {
  const { stacks } = useComponentStackValueContext('useComponentStack');
  const stack = stacks[stackKey];

  return stack;
};

const useSetComponentStack = () => {
  return useSetComponentStackContext('useSetComponentStack');
};

const ComponentStackProvider = ({ children }: PropsWithChildren) => {
  const { stacks, pop, push, remove } = useComponentStacks();

  return (
    <SetComponentStackProvider pop={pop} push={push} remove={remove}>
      <ComponentStackValueProvider stacks={stacks}>
        {children}
      </ComponentStackValueProvider>
    </SetComponentStackProvider>
  );
};

interface ComponentStackProps {
  stackKey: string;
}

const ComponentStack = (props: ComponentStackProps) => {
  const { stackKey } = props;
  const componentStack = useComponentStackValue(stackKey);

  return (
    <ComponentStackItems stackKey={stackKey} componentStack={componentStack} />
  );
};

interface ComponentStackItemsProps {
  componentStack?: Array<ComponentStackItemState>;
  stackKey: string;
}

const ComponentStackItems = memo((props: ComponentStackItemsProps) => {
  const { componentStack = [], stackKey } = props;
  const { remove } = useSetComponentStack();

  return (
    <>
      {componentStack.map(({ node, id }) => {
        const dismiss = () => {
          remove(stackKey, (item) => item.id === id);
        };

        return (
          <Fragment key={id}>
            {typeof node === 'function' ? node({ id, dismiss }) : node}
          </Fragment>
        );
      })}
    </>
  );
});
ComponentStackItems.displayName = 'ComponentStackItems';

export {
  ComponentStack,
  //
  ComponentStackProvider,
  //
  useComponentStackValue,
  useSetComponentStack,
};
export type {
  ComponentStackProps,
  //
  ComponentStackValueContext,
  SetComponentStackContext,
};
