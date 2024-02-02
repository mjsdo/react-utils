import { it, expect, describe } from 'vitest';

import { createPagination, Trunc } from './createPagination';

// [] = Sibling, Current page
// {} = Left Boundary
// <> = Right Boundary

describe('Trunc 0개', () => {
  it('양쪽 Boundary가 이어질 때 모든 페이지 반환', () => {
    // {1 2 3 4 [5]} <6 7 8 9 10>
    expect(
      createPagination({
        page: 5 /** page 값 상관 X */,
        siblingCount: 0,
        boundaryCount: 5,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // {1 2 3 [4] 5} <6 7 8 9 10>
    expect(
      createPagination({
        page: 4,
        siblingCount: 0,
        boundaryCount: 5,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // {1 2 3 4 5} <[6] 7 8 9 10>
    expect(
      createPagination({
        page: 6,
        siblingCount: 0,
        boundaryCount: 5,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // {1 2 3 4 5} <6 [7] 8 9 10>
    expect(
      createPagination({
        page: 7,
        siblingCount: 0,
        boundaryCount: 5,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // {1 2 3 4 <[5] 6} 7 8 9 10>
    expect(
      createPagination({
        page: 5,
        siblingCount: 0,
        boundaryCount: 6,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // {1 2 3 <4 [5] 6 7} 8 9 10>
    expect(
      createPagination({
        page: 5,
        siblingCount: 0,
        boundaryCount: 7,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // <{1 2 3 4 [5] 6 7 8 9 10}>
    expect(
      createPagination({
        page: 5,
        siblingCount: 0,
        boundaryCount: 10,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it(' Sibling과 양쪽 Boundary가 이어질 때 모든 페이지 반환', () => {
    // {1 2 3 4} [5 6 7] <8 9 10 11>
    expect(
      createPagination({
        page: 6,
        siblingCount: 1,
        boundaryCount: 4,
        totalPageCount: 11,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    // {1 2 3 [4} 5 6 7 <8] 9 10 11>
    expect(
      createPagination({
        page: 6,
        siblingCount: 2,
        boundaryCount: 4,
        totalPageCount: 11,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    // {1 2 3 4} [5 6 <7] 8 9 10>
    expect(
      createPagination({
        page: 6,
        siblingCount: 1,
        boundaryCount: 4,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // {1 2 3 [4} 5 6] <7 8 9 10>
    expect(
      createPagination({
        page: 5,
        siblingCount: 1,
        boundaryCount: 4,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // [{1 2 3 4} 5 6 <7 8 9 10>]
    expect(
      createPagination({
        page: 5,
        siblingCount: 6,
        boundaryCount: 4,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('Trunc 1개 (오른쪽)', () => {
  it('왼쪽 Boundary와 Sibling은 이어지고, 오른쪽 Boundary와 Sibling은 이어지지 않았을 때 오른쪽에 Trunc가 생김', () => {
    // {1 2 3} [4 5 6] 7 <8 9 10>
    expect(
      createPagination({
        page: 5,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, Trunc.RIGHT, 8, 9, 10]);

    // {1 2 [3} 4 5] 6 7 <8 9 10>
    expect(
      createPagination({
        page: 4,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, 4, 5, Trunc.RIGHT, 8, 9, 10]);

    // {[1 2 3]} 4 5 6 7 <8 9 10>
    expect(
      createPagination({
        page: 2,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, Trunc.RIGHT, 8, 9, 10]);

    // {1 [2 3 4] 5} 6 <7 8 9 10 11>
    expect(
      createPagination({
        page: 3,
        siblingCount: 1,
        boundaryCount: 5,
        totalPageCount: 11,
      })
    ).toEqual([1, 2, 3, 4, 5, Trunc.RIGHT, 7, 8, 9, 10, 11]);
  });
});

describe('Trunc 1개 (왼쪽)', () => {
  it('오른쪽 Boundary와 Sibling은 이어지고, 왼쪽 Boundary와 Sibling은 이어지지 않았을 때 왼쪽에 Trunc가 생김', () => {
    // {1 2 3} 4 [5 6 7] <8 9 10>
    expect(
      createPagination({
        page: 6,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, Trunc.LEFT, 5, 6, 7, 8, 9, 10]);

    // {1 2 3} 4 5 [6 7 <8] 9 10>
    expect(
      createPagination({
        page: 7,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, Trunc.LEFT, 6, 7, 8, 9, 10]);

    // {1 2 3} 4 5 6 7 <[8 9 10]>
    expect(
      createPagination({
        page: 9,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 10,
      })
    ).toEqual([1, 2, 3, Trunc.LEFT, 8, 9, 10]);

    // {1 2 3 4 5} 6 <7 [8 9 10] 11>
    expect(
      createPagination({
        page: 9,
        siblingCount: 1,
        boundaryCount: 5,
        totalPageCount: 11,
      })
    ).toEqual([1, 2, 3, 4, 5, Trunc.LEFT, 7, 8, 9, 10, 11]);
  });
});

describe('Trunc 2개 (양쪽)', () => {
  it('왼쪽 Boundary와 오른쪽 Boundary 모두 Sibling과 이어지지 않았을 때 양쪽에 Trunc가 생김', () => {
    // {1 2 3} 4 [5 6 7] 8 <9 10 11>
    expect(
      createPagination({
        page: 6,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 11,
      })
    ).toEqual([1, 2, 3, Trunc.LEFT, 5, 6, 7, Trunc.RIGHT, 9, 10, 11]);

    // {1 2 3} 4 [5 6 7] 8 9 <10 11 12>
    expect(
      createPagination({
        page: 6,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 12,
      })
    ).toEqual([1, 2, 3, Trunc.LEFT, 5, 6, 7, Trunc.RIGHT, 10, 11, 12]);

    // {1 2 3} 4 5 [6 7 8] 9 <10 11 12>
    expect(
      createPagination({
        page: 7,
        siblingCount: 1,
        boundaryCount: 3,
        totalPageCount: 12,
      })
    ).toEqual([1, 2, 3, Trunc.LEFT, 6, 7, 8, Trunc.RIGHT, 10, 11, 12]);
  });
});
