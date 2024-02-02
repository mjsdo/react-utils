import { clamp } from '@radix-ui/number';

enum Trunc {
  LEFT = 'trunc-left',
  RIGHT = 'trunc-right',
}

// [min, min+1, ..., max]
const range = (min: number, max: number) => {
  if (min > max) return [];
  if (min === max) return [min];
  return Array(max - min + 1)
    .fill(undefined)
    .map((_, index) => index + min);
};

type CreatePaginationParams = {
  page: number;
  totalPageCount: number;
  siblingCount: number;
  boundaryCount: number;
  firstPage?: number;
};

const createPagination = (params: CreatePaginationParams) => {
  const {
    page,
    totalPageCount,
    siblingCount,
    boundaryCount,
    firstPage = 1,
  } = params;

  const pageMinmax: [number, number] = [firstPage, totalPageCount];

  const leftBoundaryStart = firstPage;
  /**
   * clamp boundary 중 `firstPage -1`은 `boundaryCount`가 0일 때
   * 왼쪽 boundary가 range(1, 0)이 되어 빈 배열을 반환하기 때문에 필요
   */
  const leftBoundaryEnd = clamp(boundaryCount, [firstPage - 1, totalPageCount]);

  const siblingStart = clamp(page - siblingCount, pageMinmax);
  const siblingEnd = clamp(page + siblingCount, pageMinmax);

  const rightBoundaryStart = totalPageCount - boundaryCount + 1;
  const rightBoundaryEnd = totalPageCount;

  let pagination: Array<number | Trunc>;

  if (
    leftBoundaryEnd + 1 >= rightBoundaryStart ||
    (leftBoundaryEnd + 1 >= siblingStart &&
      siblingEnd + 1 >= rightBoundaryStart)
  ) {
    /**
     * - 왼쪽 Boundary - 오른쪽 Boundary가 겹칠 때
     * - 또는
     * - Sibling과 양쪽 Boundary가 모두 겹칠 때
     */
    pagination = range(leftBoundaryStart, rightBoundaryEnd);
  } else if (leftBoundaryEnd + 1 >= siblingStart) {
    /** 오른쪽 Trunc */
    pagination = [
      ...range(firstPage, Math.max(leftBoundaryEnd, siblingEnd)),
      Trunc.RIGHT,
      ...range(rightBoundaryStart, rightBoundaryEnd),
    ];
  } else if (siblingEnd + 1 >= rightBoundaryStart) {
    /** 왼쪽 Trunc */
    pagination = [
      ...range(leftBoundaryStart, leftBoundaryEnd),
      Trunc.LEFT,
      ...range(Math.min(rightBoundaryStart, siblingStart), rightBoundaryEnd),
    ];
  } else {
    /** 양쪽 Trunc */
    pagination = [
      ...range(leftBoundaryStart, leftBoundaryEnd),
      Trunc.LEFT,
      ...range(siblingStart, siblingEnd),
      Trunc.RIGHT,
      ...range(rightBoundaryStart, rightBoundaryEnd),
    ];
  }

  return pagination;
};

export { createPagination, Trunc };
