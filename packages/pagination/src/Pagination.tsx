import type { ReactElement, ReactNode } from 'react';

import { clamp } from '@radix-ui/number';
import { Slot } from '@radix-ui/react-slot';
import React, { Fragment } from 'react';

const composeClassnames = (...args: Array<undefined | boolean | string>) => {
  return args.filter(Boolean).join(' ');
};

// [min, min+1, ..., max]
const range = (min: number, max: number) => {
  if (min > max) return [];
  if (min === max) return [min];
  return Array(max - min + 1)
    .fill(undefined)
    .map((_, index) => index + min);
};

const firstPage = 1;
const cn = {
  item: 'pagination-item',
  trunc: 'pagination-item__trunc',
  previous: 'pagination-item__previous',
  next: 'pagination-item__next',
  currentPage: 'pagination-item--current-page',
};

type PaginationItemUI = (params: PaginationItemUIParams) => ReactElement;

type PaginationItemUIParams = {
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
  onPageChange: (page: number) => void;

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

  /**
   * - 왼쪽 Trunc UI
   * - 렌더링하지 않으려면 `null`을 전달한다.
   */
  leftTruncUI?: PaginationItemUI | null;
  /**
   * - 오른쪽 Trunc UI
   * - 렌더링하지 않으려면 `null`을 전달한다.
   */
  rightTruncUI?: PaginationItemUI | null;
  /**
   * - 이전 페이지 UI
   * - 렌더링하지 않으려면 `null`을 전달한다.
   */
  previousUI?: PaginationItemUI | null;
  /**
   * - 다음 페이지 UI
   * - 렌더링하지 않으려면 `null`을 전달한다.
   */
  nextUI?: PaginationItemUI | null;
  /**
   * - 페이지 UI
   * - 렌더링하지 않으려면 `null`을 전달한다.
   */
  itemUI?: PaginationItemUI | null;

  /**
   * - `page`값이 범위를 벗어났을 때 보여줄 Pagination UI
   * - 값을 전달하지 않는 경우 기존 Pagination UI가 보임
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

  const isPageValid = (page: number) =>
    firstPage <= page && page <= totalPageCount;
  const isCurrentPageValid = isPageValid(page);
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

  const itemParams: Omit<PaginationItemUIParams, 'targetPage'> = {
    currentPage: page,
    isCurrentPageValid,
    lastPage: totalPageCount,
  };

  const renderItem = (targetPage: number) => {
    const onClick = () => onPageChange(targetPage);
    const isCurrentPage = targetPage === page;

    return (
      <Fragment key={targetPage}>
        {itemUI && (
          <Slot
            onClick={onClick}
            className={composeClassnames(
              cn.item,
              isCurrentPage && cn.currentPage
            )}
          >
            {itemUI({ ...itemParams, targetPage })}
          </Slot>
        )}
      </Fragment>
    );
  };
  const renderTrunc = (
    truncUI: PaginationItemUI | null,
    targetPage: number
  ) => {
    return (
      truncUI && (
        <Slot
          onClick={() => onPageChange(targetPage)}
          className={composeClassnames(cn.item, cn.trunc)}
        >
          {truncUI({
            ...itemParams,
            targetPage: targetPage,
          })}
        </Slot>
      )
    );
  };

  const renderOneStepNavigation = (
    navigationUI: PaginationItemUI | null,
    targetPage: number,
    itemClassName: string
  ) => {
    const onClick = () => {
      if (isPageValid(targetPage)) return;
      onPageChange(targetPage);
    };

    return (
      navigationUI && (
        <Slot
          onClick={onClick}
          className={composeClassnames(cn.item, itemClassName)}
        >
          {navigationUI({
            ...itemParams,
            targetPage,
          })}
        </Slot>
      )
    );
  };

  return (
    <div className={composeClassnames(className, 'pagination-root')}>
      {showFallbackUI ? (
        invalidFallbackUI
      ) : (
        <>
          {/* Previous step */}
          {renderOneStepNavigation(previousUI, page - 1, cn.previous)}

          {/* Left boundary */}
          {range(leftBoundaryStart, leftBoundaryEnd).map(renderItem)}

          {/* Left trunc ~ Sibling */}
          {skipLeftTrunc ? (
            range(leftBoundaryEnd + 1, siblingEnd).map(renderItem)
          ) : (
            <>
              {renderTrunc(leftTruncUI, Math.max(firstPage, page - truncStep))}
              {range(siblingStart, siblingEnd).map(renderItem)}
            </>
          )}

          {/* Right trunc ~ Right boundary */}
          {skipRightTrunc ? (
            range(siblingEnd + 1, rightBoundaryEnd).map(renderItem)
          ) : (
            <>
              {renderTrunc(
                rightTruncUI,
                Math.min(totalPageCount, page + truncStep)
              )}
              {range(rightBoundaryStart, rightBoundaryEnd).map(renderItem)}
            </>
          )}

          {/* Next step */}
          {renderOneStepNavigation(nextUI, page + 1, cn.next)}
        </>
      )}
    </div>
  );
};

const defaultTruncUI: PaginationItemUI = () => {
  return <button type="button">⋯</button>;
};

const defaultPreviousUI: PaginationItemUI = () => {
  return <button type="button">{'<'}</button>;
};

const defaultNextUI: PaginationItemUI = () => {
  return <button type="button">{'>'}</button>;
};

const defaultItemUI: PaginationItemUI = ({ targetPage }) => {
  return <button type="button">{targetPage}</button>;
};

export { Pagination };
export type { PaginationProps, PaginationItemUI, PaginationItemUIParams };
