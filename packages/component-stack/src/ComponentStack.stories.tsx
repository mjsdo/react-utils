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

/*** Basic Stack ***/

const BasicStackExample = () => {
  const { push, pop, remove } = useSetComponentStack();
  const onPush = () => {
    push('basic', {
      node: ({ id }) => (
        <div>
          Auto generated item id:
          <strong style={{ color: 'blue' }}>{id}</strong>
        </div>
      ),
    });
  };
  const onPop = () => {
    pop('basic');
  };
  const onRemove = () => {
    remove('basic', () => true);
  };

  return (
    <>
      <button type="button" onClick={onPush}>
        Push
      </button>
      <button type="button" onClick={onPop}>
        Pop
      </button>
      <button type="button" onClick={onRemove}>
        Remove first item
      </button>
    </>
  );
};

export const BasicStackStory: StoryObj = {
  name: 'Basic Stack',
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <ComponentStack stackKey="basic" />
        </>
      );
    },
  ],

  render: () => {
    return <BasicStackExample />;
  },
};

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
        zIndex: 1,
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
          zIndex: 1,
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
          zIndex: 1,
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

export const DialogStackStory: StoryObj = {
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
            zIndex: 1,
          }}
        />

        <RadixDialog.Content
          onPointerDownOutside={onClose}
          onEscapeKeyDown={onClose}
          style={{
            background: 'darkgoldenrod',
            inset: 40,
            position: 'fixed',
            zIndex: 1,
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
            zIndex: 1,
          }}
        />

        <RadixDialog.Content
          onEscapeKeyDown={onClose}
          onPointerDownOutside={onClose}
          style={{
            background: 'darkgoldenrod',
            inset: 80,
            position: 'fixed',
            zIndex: 1,
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

export const RadixDialogStackStory: StoryObj = {
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
