import { useState } from 'react';

import styled from '@emotion/styled';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

const Container = styled.div({
  padding: '16px 0',
  display: 'flex',
  justifyContent: 'center',
});

const Button = styled.button(({ active }) => ({
  backgroundColor: active ? '#FFBD60' : 'transparent',
  color: active ? '#ffffff' : '#000000',
  width: '40px',
  height: '40px',
  fontSize: '1.6rem',
  fontFamily: 'Noto Sans KR, sans-serif',
}));

function Pagination({
  totalCount,
  limit,
  page,
  setPage,
}) {
  const [paginationBarCount, setPaginationBarCount] = useState(1);

  const totalPages = Math.ceil(totalCount / limit);
  const offset = (paginationBarCount - 1) * limit;

  const buttons = {
    prevSkipByTen() {
      if (paginationBarCount === 1) {
        return null;
      }
      setPaginationBarCount(paginationBarCount - 1);
    },
    nextSkipByTen() {
      if (paginationBarCount === Math.ceil(totalPages / limit)) {
        return null;
      }
      setPaginationBarCount(paginationBarCount + 1);
    },
    prev() {
      if (page === 1) {
        return null;
      }
      if (page % limit === 1) {
        setPaginationBarCount(paginationBarCount - 1);
      }
      setPage(page - 1);
    },
    next() {
      if (page === totalPages) {
        return null;
      }
      if (page % limit === 0) {
        setPaginationBarCount(paginationBarCount + 1);
      }
      setPage(page + 1);
    },
  };

  const handleClick = (button, selectPage) => {
    if (!button) {
      setPage(selectPage);
      return;
    }
    buttons[button]();
  };

  return (
    <Container>
      <Button
        type="button"
        onClick={() => handleClick('prevSkipByTen')}
      >
        <RxDoubleArrowLeft />
      </Button>
      <Button
        type="button"
        onClick={() => handleClick('prev')}
      >
        <IoIosArrowBack />
      </Button>
      {
        Array(totalPages)
          .fill()
          .slice(offset, offset + limit)
          .map((_, i) => (
            <Button
              key={i + 1}
              type="button"
              onClick={() => handleClick(_, offset + (i + 1))}
              active={page === (offset + (i + 1))}
            >
              {offset + (i + 1)}
            </Button>
          ))
      }
      <Button
        type="button"
        onClick={() => handleClick('next')}
      >
        <IoIosArrowForward />
      </Button>
      <Button
        type="button"
        onClick={() => handleClick('nextSkipByTen')}
      >
        <RxDoubleArrowRight />
      </Button>
    </Container>
  );
}

export default Pagination;
