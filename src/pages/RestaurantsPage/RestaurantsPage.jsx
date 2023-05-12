import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  loadCategories,
  loadRegions,
} from '../../async-action';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

const Container = styled.div({
  width: '90%',
  margin: '0 auto',
  padding: '32px 24px',

});

export default function RestaurantsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;
    navigate(url);
  }
  return (
    <Container>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </Container>
  );
}
