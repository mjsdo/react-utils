import type { Meta, StoryObj } from '@storybook/react';

import * as RadixDialog from '@radix-ui/react-dialog';
import React from 'react';

import {
  ComponentStackProvider,
  ComponentStack,
  useSetComponentStack,
} from './ComponentStack';

const meta = {
  title: 'libs/react-component-stack',
  component: ComponentStack,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ComponentStackProvider>
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </ComponentStackProvider>
    ),
  ],
} satisfies Meta<typeof ComponentStack>;

export default meta;

/* --------------- Examples --------------- */

/*** Dialog Stack ***/
const DialogStackExample = () => {
  const { push } = useSetComponentStack();
  const onClick = () => {
    push('dialog', {
      node: <DialogDepth1 />,
    });
  };

  return (
    <button type="button" onClick={onClick}>
      Open
    </button>
  );
};

const DialogOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    />
  );
};

const DialogDepth1 = () => {
  const { push, pop } = useSetComponentStack();
  const onClickClose = () => pop('dialog');
  const onClickOpen = () =>
    push('dialog', {
      node: ({ dismiss }) => <DialogDepth2 onClickClose={dismiss} />,
    });

  return (
    <>
      <DialogOverlay />

      <div
        style={{
          position: 'fixed',
          inset: 40,
          background: 'darkgoldenrod',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <button type="button" onClick={onClickOpen}>
            Open
          </button>
          <button type="button" onClick={onClickClose} style={{ fontSize: 24 }}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

const DialogDepth2 = ({ onClickClose }: { onClickClose: () => void }) => {
  return (
    <>
      <DialogOverlay />

      <div
        style={{
          position: 'fixed',
          inset: 80,
          background: 'darkgoldenrod',
          textAlign: 'right',
        }}
      >
        <button type="button" onClick={onClickClose} style={{ fontSize: 24 }}>
          &times;
        </button>
      </div>
    </>
  );
};

export const Example1: StoryObj = {
  name: 'Dialog Stack',
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <ComponentStack stackKey="dialog" />
        </>
      );
    },
  ],

  render: () => {
    return <DialogStackExample />;
  },
};

/***  Dialog Stack (@radix-ui/dialog) ***/
const RadixDialogStackExample = () => {
  const { push } = useSetComponentStack();
  const onClick = () => {
    push('dialog', {
      node: <RadixDialogDepth1 />,
    });
  };

  return (
    <button type="button" onClick={onClick}>
      Open
    </button>
  );
};

const RadixDialogDepth1 = () => {
  const { pop, push } = useSetComponentStack();
  const onClose = () => pop('dialog');
  const onClickOpen = () =>
    push('dialog', {
      node: ({ dismiss }) => <RadixDialogDepth2 onClose={dismiss} />,
    });

  return (
    <RadixDialog.Root open={true}>
      <RadixDialog.Portal>
        <RadixDialog.DialogOverlay
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            inset: 0,
            position: 'fixed',
          }}
        />

        <RadixDialog.Content
          onPointerDownOutside={onClose}
          onEscapeKeyDown={onClose}
          style={{
            background: 'darkgoldenrod',
            inset: 40,
            position: 'fixed',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button type="button" onClick={onClickOpen}>
              Open
            </button>
            <RadixDialog.Close onClick={onClose} style={{ fontSize: 24 }}>
              &times;
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

const RadixDialogDepth2 = ({ onClose }: { onClose: () => void }) => {
  return (
    <RadixDialog.Root open={true}>
      <RadixDialog.Portal>
        <RadixDialog.DialogOverlay
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            inset: 0,
            position: 'fixed',
          }}
        />

        <RadixDialog.Content
          onEscapeKeyDown={onClose}
          onPointerDownOutside={onClose}
          style={{
            background: 'darkgoldenrod',
            inset: 80,
            position: 'fixed',
            textAlign: 'right',
          }}
        >
          <RadixDialog.Close onClick={onClose} style={{ fontSize: 24 }}>
            &times;
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export const Example2: StoryObj = {
  name: 'Dialog Stack (@radix-ui/dialog)',
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <ComponentStack stackKey="dialog" />
        </>
      );
    },
  ],

  render: () => {
    return <RadixDialogStackExample />;
  },
};
