import type { ComponentStackItemState } from './useComponentStacks';
import type { RenderHookResult } from '@testing-library/react';

import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';

import { useComponentStacks } from './useComponentStacks';

describe('useComponentStacks', () => {
  let rendered: RenderHookResult<
    ReturnType<typeof useComponentStacks>,
    unknown
  >;
  beforeEach(() => {
    rendered = renderHook(() => useComponentStacks());
  });

  it('`stacks`의 초깃값은 `{}`이다.', () => {
    const { current } = rendered.result;

    expect(current.stacks).toEqual({});
  });

  describe('push', () => {
    it('`stack`의 뒤에 item을 추가한다.', () => {
      const stackKey = 'stackKey';
      const { result } = rendered;
      const { push } = result.current;
      const item = {
        id: '1',
        node: <div>node</div>,
      };

      act(() => push(stackKey, item));
      expect(result.current.stacks[stackKey]).toEqual([item]);

      act(() => push(stackKey, item));
      expect(result.current.stacks[stackKey]).toEqual([item, item]);
    });

    it('`item.id`없이 item을 추가한다.', () => {
      const stackKey = 'stackKey';
      const { result } = rendered;
      const { push } = result.current;
      const item = {
        node: <div>node</div>,
      };

      act(() => push(stackKey, item));
      const [pushedItem] = result.current.stacks[stackKey]!;
      expect(pushedItem.id).toBeTruthy();
    });
  });

  describe('pop', () => {
    it('`stack`에 가장 최근에 추가된 item을 제거한다.', () => {
      const stackKey = 'stackKey';
      const { result } = rendered;
      const getStack = () => {
        return result.current.stacks[stackKey];
      };

      const { push, pop } = result.current;
      const firstItem = {
        id: '1',
        node: <div>first node</div>,
      };
      const lastItem = {
        id: '2',
        node: <div>last node</div>,
      };

      act(() => {
        push(stackKey, firstItem);
        push(stackKey, lastItem);
      });

      expect(getStack()).toEqual([firstItem, lastItem]);

      act(() => pop(stackKey));
      expect(getStack()).toEqual([firstItem]);

      act(() => pop(stackKey));
      expect(getStack()).toEqual([]);

      act(() => pop(stackKey));
      expect(getStack()).toEqual([]);
    });
  });

  describe('remove', () => {
    it('타겟 item중 가장 인덱스가 작은 하나를 제거한다.', () => {
      const stackKey = 'stackKey';
      const { result } = rendered;
      const getStack = () => {
        return result.current.stacks[stackKey]!;
      };

      const { push, remove } = result.current;
      const items: ComponentStackItemState[] = [
        { id: '1', node: <div>node</div> },
        { id: '2', node: <div>node</div> },
        { id: '3', node: <div>node</div> },
        { id: '4', node: <div>node</div> },
        { id: '3', node: <div>node</div> },
      ];

      act(() => {
        items.forEach((item) => {
          push(stackKey, item);
        });
      });

      act(() => remove(stackKey, (item) => item.id === '3'));
      expect(getStack()).toEqual([
        { id: '1', node: <div>node</div> },
        { id: '2', node: <div>node</div> },
        { id: '4', node: <div>node</div> },
        { id: '3', node: <div>node</div> },
      ]);

      act(() => remove(stackKey, (item) => item.id === '3'));
      expect(getStack()).toEqual([
        { id: '1', node: <div>node</div> },
        { id: '2', node: <div>node</div> },
        { id: '4', node: <div>node</div> },
      ]);

      act(() => remove(stackKey, (item) => item.id === '3'));
      expect(getStack()).toEqual([
        { id: '1', node: <div>node</div> },
        { id: '2', node: <div>node</div> },
        { id: '4', node: <div>node</div> },
      ]);
    });
  });
});
