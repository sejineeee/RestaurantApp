import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { FaUser } from 'react-icons/fa';

import Pagination from '../../components/Pagination';

import { setIsOpenModal } from '../../slice';

import PropTypes from 'prop-types';

const Container = styled.div({
  fontFamily: 'Noto Sans KR, sans-serif',
});

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
  padding: '16px 0 16px 48px',

  '& div': {
    display: 'flex',
    alignItems: 'center',
  },
});

const Title = styled.p({
  fontSize: '34px',
  fontWeight: 'bold',
  letterSpacing: 1,
  paddingRight: '16px',
});

const Count = styled.p({
  fontSize: '2.2rem',
  color: '#FFBD60',
});

const Button = styled.button({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#D78521',
  letterSpacing: '2px',
});

const ReviewsContainer = styled.div({
  borderTop: '2px solid #AEAEAE',
  borderBottom: '2px solid #AEAEAE',
  padding: '6px 0',
});

const Review = styled.div({
  borderBottom: '1px solid #BBBBBB',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.6rem',
  lineHeight: 1.3,
  padding: '8px 16px',

  '& div': {
    marginLeft: '10px',
  },

  '&:last-of-type': {
    borderBottom: 'none',
  },
});

function Reviews({ reviews }) {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  const totalCount = sortedReviews.length;

  const limit = 10;
  const offset = (page - 1) * limit;

  const handleClick = () => {
    dispatch(setIsOpenModal(true));
  };

  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <Container>
      <Header>
        <div>
          <Title>리뷰</Title>
          <Count>{totalCount}</Count>
        </div>
        <Button type="button" onClick={handleClick}>
          리뷰쓰기
        </Button>
      </Header>
      <ReviewsContainer>
        {sortedReviews.slice(offset, offset + limit).map((review) => (
          <Review key={review.id}>
            <FaUser />
            <div>
              <p>
                {review.name} <span>{review.score}점</span>
              </p>
              <p>{review.description}</p>
            </div>
          </Review>
        ))}
      </ReviewsContainer>
      <Pagination
        totalCount={totalCount}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
}

export default React.memo(Reviews);

Reviews.propTypes = {
  reviews: PropTypes.array,
}