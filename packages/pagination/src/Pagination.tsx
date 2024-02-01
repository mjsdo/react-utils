import React from 'react';

interface PaginationProps {
  page?: number;
  onPageChange?: (page: number) => void;
  totalPageCount: number;

  siblingCount?: number; // 0 이상
  boundaryCount?: number; // 0 이상

  truncStep?: number;
  leftTruncUI?: (
    targetPage: number,
    currentPage: number,
    lastPage: number
  ) => void;
  rightTruncUI?: () => void;
  itemUI?: () => void;
  previousUI?: () => void;
  nextUI?: () => void;

  className?: string;
}

const Pagination = (props: PaginationProps) => {
  const {} = props;
  return <div>Pagination</div>;
};

export { Pagination };
export type { PaginationProps };

// [previous] [leftBoundary] [lT] [rT] [rightBoundary] [next]
// 지울 수 있는 것:
// > Boundary -> count 0
// > Sibling -> count 0
// > prevUI, nextUI -> null값 주면 됨.
// > truncUI -> null
// > ItemUI -> null
