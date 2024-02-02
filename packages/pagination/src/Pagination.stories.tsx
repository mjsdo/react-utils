import type { PaginationProps } from './Pagination';
import type { Meta, StoryObj } from '@storybook/react';

import React, { useEffect, useState } from 'react';

import { Pagination } from './Pagination';
import './Pagination.stories.scss';

const meta = {
  title: 'libs/react-pagination',
  parameters: {
    layout: 'fullscreen',
  },
  component: Pagination,
  decorators: [
    (Story) => (
      <div style={{ padding: 20 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Pagination>;

export default meta;

/* --------------- Examples --------------- */

const PaginationWrapper = (props: PaginationProps) => {
  const [page, setPage] = useState(5);

  useEffect(() => {
    if (props.page == undefined) return;

    setPage(props.page);
  }, [props.page]);

  return (
    <Pagination
      itemUI={({ targetPage }) => {
        return (
          <button type="button" className="basic-pagination">
            {targetPage}
          </button>
        );
      }}
      {...props}
      page={page}
      onPageChange={setPage}
    />
  );
};

/*** Basic Pagination ***/
export const BasicPaginationStory: StoryObj<typeof Pagination> = {
  name: 'Basic Pagination',
  args: {
    totalPageCount: 10,
  },
  render: PaginationWrapper,
};

/*** Without One-Step Navigation Example ***/
export const WithoutOneStepNavigationStory: StoryObj<typeof Pagination> = {
  name: 'Without One Step Navigation',
  args: {
    totalPageCount: 10,
  },
  render: (args) => (
    <PaginationWrapper {...args} previousUI={null} nextUI={null} />
  ),
};

/*** Without Trunc UI Example ***/
export const WithoutTruncStory: StoryObj<typeof Pagination> = {
  name: 'Without Trunc UI',
  args: {
    totalPageCount: 10,
  },
  render: (args) => (
    <PaginationWrapper {...args} leftTruncUI={null} rightTruncUI={null} />
  ),
};

/*** Styling Example ***/
export const StyledStory: StoryObj<typeof Pagination> = {
  name: 'Styled',
  args: {
    totalPageCount: 10,
  },
  render: (args) => (
    <PaginationWrapper
      {...args}
      className="styled-pagination"
      previousUI={({ currentPage }) => {
        const isFirstPage = currentPage === 1;

        return (
          <button
            type="button"
            className="styled-pagination-item"
            disabled={isFirstPage}
          >
            <svg viewBox="0 0 24 22">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        );
      }}
      nextUI={({ lastPage, currentPage }) => {
        const isLastPage = lastPage === currentPage;
        return (
          <button
            type="button"
            className="styled-pagination-item"
            disabled={isLastPage}
          >
            <svg viewBox="0 0 24 22">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        );
      }}
      itemUI={({ targetPage }) => {
        return (
          <button type="button" className="styled-pagination-item">
            {targetPage}
          </button>
        );
      }}
      leftTruncUI={() => {
        return (
          <button type="button" className="styled-pagination-item">
            ...
          </button>
        );
      }}
      rightTruncUI={() => {
        return (
          <button type="button" className="styled-pagination-item">
            ...
          </button>
        );
      }}
    />
  ),
};
