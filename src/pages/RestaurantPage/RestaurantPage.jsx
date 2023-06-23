import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import RestaurantContainer from './RestaurantContainer';

import PropTypes from 'prop-types';

const Container = styled.div({
  width: '90%',
  margin: '0 auto',
  padding: '32px 24px',

});

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <Container>
      <RestaurantContainer restaurantId={id} />
    </Container>
  );
}

RestaurantPage.propTypes = {
  params: PropTypes.string,
}
