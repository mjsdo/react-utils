import type { ReactElement } from 'react';

import React from 'react';

type PaginationItemUI = (
  targetPage: number,
  currentPage: number,
  lastPage: number
) => ReactElement;

interface PaginationProps {
  /** 페이지 상태 */
  page: number;
  /** 전체 페이지 개수 */
  totalPageCount: number;
  /**
   * - 페이지네이션 아이템 UI를 클릭할 때 수행되는 콜백
   * - 각 UI 컴포넌트에 `onClick` 핸들러가 있는경우 합성된다.
   * - 호출을 막기 위해서는 각 UI 컴포넌트의 `onClick` 핸들러에서 `e.preventDefault()`를 호출하면 된다.
   */
  onPageChange?: (page: number) => void;

  /**
   * - 0 이상이어야 함
   * - 현재 페이지 UI의 앞뒤로 표시할 페이지의 개수
   */
  siblingCount?: number;
  /**
   * - 0 이상이어야 함
   * - 첫 페이지 UI의 뒤로, 마지막 페이지 UI의 앞으로 표시할 페이지의 개수
   */
  boundaryCount?: number;
  /**
   * - Trunc UI를 클릭했을 때 이동할 페이지를 결정
   * - 현재 페이지가 5, `truncStep`이 1이면, trunc UI 클릭시 4 또는 6으로 이동
   */
  truncStep?: number;

  /** 왼쪽 Trunc UI */
  leftTruncUI?: PaginationItemUI;
  /** 오른쪽 Trunc UI */
  rightTruncUI?: PaginationItemUI;
  /** 이전 페이지 UI */
  previousUI?: PaginationItemUI;
  /** 다음 페이지 UI */
  nextUI?: PaginationItemUI;
  /** 페이지 UI */
  itemUI?: PaginationItemUI;

  className?: string;
}

const Pagination = (props: PaginationProps) => {
  const {
    page,
    totalPageCount,
    onPageChange,

    siblingCount = 1,
    boundaryCount = 1,
    truncStep = 5,

    leftTruncUI = defaultTruncUI,
    rightTruncUI = defaultTruncUI,

    previousUI = defaultPreviousUI,
    nextUI = defaultNextUI,

    itemUI = defaultItemUI,

    className,
  } = props;

  return <div className={className}>Pagination</div>;
};

const defaultTruncUI: PaginationItemUI = () => {
  return <button type="button">⋯</button>;
};

const defaultPreviousUI: PaginationItemUI = () => {
  return <button type="button">&lt;</button>;
};

const defaultNextUI: PaginationItemUI = () => {
  return <button type="button">&gt;</button>;
};

const defaultItemUI: PaginationItemUI = (targetPage) => {
  return <button type="button">{targetPage}</button>;
};

export { Pagination };
export type { PaginationProps, PaginationItemUI };

// [previous] [leftBoundary] [lT] [rT] [rightBoundary] [next]
// 지울 수 있는 것:
// > Boundary -> count 0
// > Sibling -> count 0
// > prevUI, nextUI -> null값 주면 됨.
// > truncUI -> null
// > ItemUI -> null

// TODO:
//   클래스이름 넣기
//   root
//   pagination-item
//   -> prev, next, sibling, boundary
//   active
