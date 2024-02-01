import type { ReactElement, ReactNode } from 'react';

import { clamp } from '@radix-ui/number';
import { Slot } from '@radix-ui/react-slot';
import React, { Fragment } from 'react';

// [min, min+1, ..., max]
const range = (min: number, max: number) => {
  if (min > max) return [];
  if (min === max) return [min];
  return Array(max - min + 1)
    .fill(undefined)
    .map((_, index) => index + min);
};

const firstPage = 1;

type PaginationItemUI = (params: PaginationItemParams) => ReactElement;

type PaginationItemParams = {
  /** 이동할 페이지 */
  targetPage: number;
  currentPage: number;
  lastPage: number;
  /**
   * - `currentPage`가 유효한지를 나타내는 boolean 값
   * - `currentPage`가 1보다 작거나 `totalPageCount`보다 크다면 `false`
   */
  isCurrentPageValid: boolean;
};

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
  leftTruncUI?: PaginationItemUI | null;
  /** 오른쪽 Trunc UI */
  rightTruncUI?: PaginationItemUI | null;
  /** 이전 페이지 UI */
  previousUI?: PaginationItemUI | null;
  /** 다음 페이지 UI */
  nextUI?: PaginationItemUI | null;
  /** 페이지 UI */
  itemUI?: PaginationItemUI | null;

  /**
   * - `page`값이 범위를 벗어났을 때 보여줄 Pagination UI
   * - 전달하지 않는 경우 기존 Pagination UI가 보임
   */
  invalidFallbackUI?: ReactNode;

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
    invalidFallbackUI,

    className,
  } = props;

  const isCurrentPageValid = firstPage <= page && page <= totalPageCount;
  const showFallbackUI = !isCurrentPageValid && invalidFallbackUI;
  const clampBoundary: [number, number] = [firstPage, totalPageCount];

  const leftBoundaryStart = firstPage;
  const leftBoundaryEnd = clamp(boundaryCount, clampBoundary);
  const siblingStart = clamp(page - siblingCount, clampBoundary);
  const siblingEnd = clamp(page + siblingCount, clampBoundary);
  const rightBoundaryStart = totalPageCount - boundaryCount + 1;
  const rightBoundaryEnd = totalPageCount;

  const skipLeftTrunc = leftBoundaryEnd >= siblingStart - 1;
  const skipRightTrunc = siblingEnd >= rightBoundaryStart - 1;

  const itemParams: Omit<PaginationItemParams, 'targetPage'> = {
    currentPage: page,
    isCurrentPageValid,
    lastPage: totalPageCount,
  };

  const renderItem = (page: number) => (
    <Fragment key={page}>
      {itemUI && (
        <Slot onClick={() => onPageChange?.(page)}>
          {itemUI({ ...itemParams, targetPage: page })}
        </Slot>
      )}
    </Fragment>
  );

  const handleClickPrevious = (page: number) => () => {
    const targetPage = page - 1;
    if (targetPage < firstPage) return;
    onPageChange?.(clamp(targetPage, clampBoundary));
  };
  const handleClickNext = (page: number) => () => {
    const targetPage = page + 1;
    if (targetPage > totalPageCount) return;
    onPageChange?.(clamp(targetPage, clampBoundary));
  };

  return (
    <div className={className}>
      {showFallbackUI ? (
        invalidFallbackUI
      ) : (
        <>
          {/* previous */}

          {previousUI && (
            <Slot onClick={handleClickPrevious(page)}>
              {previousUI({
                ...itemParams,
                targetPage: page - 1,
              })}
            </Slot>
          )}

          {/* left boundary */}
          {range(leftBoundaryStart, leftBoundaryEnd).map(renderItem)}

          {/* left trunc */}
          {skipLeftTrunc ? (
            range(leftBoundaryEnd + 1, siblingEnd).map(renderItem)
          ) : (
            <>
              {leftTruncUI &&
                leftTruncUI({
                  ...itemParams,
                  targetPage: Math.max(firstPage, page - truncStep),
                })}
              {range(siblingStart, siblingEnd).map(renderItem)}
            </>
          )}

          {/* right trunc */}
          {skipRightTrunc ? (
            range(siblingEnd + 1, rightBoundaryEnd).map(renderItem)
          ) : (
            <>
              {rightTruncUI &&
                rightTruncUI({
                  ...itemParams,
                  targetPage: Math.min(totalPageCount, page + truncStep),
                })}
              {range(rightBoundaryStart, rightBoundaryEnd).map(renderItem)}
            </>
          )}

          {/* next */}

          {nextUI && (
            <Slot onClick={handleClickNext(page)}>
              {nextUI({
                ...itemParams,
                targetPage: page + 1,
              })}
            </Slot>
          )}
        </>
      )}
    </div>
  );
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

const defaultItemUI: PaginationItemUI = ({ targetPage }) => {
  return <button type="button">{targetPage}</button>;
};

export { Pagination };
export type { PaginationProps, PaginationItemUI };

// [previous] [leftBoundary] [lT] [rT] [rightBoundary] [next]
// 지울 수 있는 것:
// > Boundary -> count 0
// > Sibling -> count 0
// > prevUI, nextUI, truncUI, itemUI -> `null`값 주면 됨.

// TODO:
//   클래스이름 넣기
//   root
//   pagination-item
//   -> prev, next, sibling, boundary
//   active
