import type { ReactNode } from 'react';

import { useRef, useCallback, useState } from 'react';

type ComponentStackKey = string;
type ComponentStackItemState = {
  id: string;
  node:
    | ((params: { id: string; dismiss: () => void }) => ReactNode)
    | ReactNode;
};
type ComponentStacksState = Partial<
  Record<ComponentStackKey, Array<ComponentStackItemState>>
>;

const useComponentStacks = () => {
  const [stacks, setStacks] = useState<ComponentStacksState>({});

  const idNum = useRef(1);
  const idPrefix = 'stack-item:';
  const generateComponentId = () => `${idPrefix}${idNum.current++}`;

  const push = useCallback(
    (
      stackKey: string,
      valueArg:
        | ComponentStackItemState
        | (Omit<ComponentStackItemState, 'id'> & { id?: undefined })
    ) => {
      setStacks((prev) => {
        const prevStack = prev[stackKey];
        const newValue: ComponentStackItemState = {
          id: valueArg.id ?? generateComponentId(),
          node: valueArg.node,
        };

        const newStack = prevStack ? [...prevStack, newValue] : [newValue];

        return {
          ...prev,
          [stackKey]: newStack,
        };
      });
    },
    []
  );

  const pop = useCallback((stackKey: string) => {
    setStacks((prev) => {
      const prevStack = prev[stackKey];
      const newStack = prevStack ? prevStack.slice(0, -1) : prev[stackKey];

      return {
        ...prev,
        [stackKey]: newStack,
      };
    });
  }, []);

  // `predicate`이 `true`를 반환 && `index`가 가장 작은 아이템 제거
  const remove = useCallback(
    (
      stackKey: string,
      predicate: (value: ComponentStackItemState) => boolean
    ) => {
      setStacks((prev) => {
        const prevStack = prev[stackKey];

        if (!prevStack) {
          return prev;
        }

        const targetIndex = prevStack.findIndex(predicate);

        if (targetIndex === -1) {
          return prev;
        }

        return {
          ...prev,
          [stackKey]: prevStack.filter((_, index) => index === targetIndex),
        };
      });
    },
    []
  );

  return {
    stacks,
    push,
    pop,
    remove,
  };
};

export { useComponentStacks };
export type {
  ComponentStackKey,
  ComponentStackItemState,
  ComponentStacksState,
};
// <ComponentStack stackKey="id" />
