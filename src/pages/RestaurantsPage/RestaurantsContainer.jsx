import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from '../../utils';

import PropTypes from 'prop-types';

const Title = styled.p({
  fontFamily: 'Noto Sans KR, sans-serif',
  fontWeight: 'bold',
  fontSize: '2.4rem',
});

const List = styled.ul({
  display: 'flex',
  textAlign: 'center',
  fontFamily: 'Noto Sans KR, sans-serif',
  fontWeight: 'bold',
  padding: '1rem 0',
});

const Item = styled.li({
  margin: '8px',

  '& div': {
    width: '150px',
    height: '150px',
    padding: '8px 16px',
    borderRadius: '50%',
    backgroundColor: '#FFBD60',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  '& img': {
    objectFit: 'contain',
    width: '90%',
    height: '90%',
  },

  '& a': {
    fontSize: '1.6rem',
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: 'bold',
    display: 'block',
    padding: '10px 0',
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  if (restaurants.length === 0) {
    return null;
  }

  return (
    <>
      <Title>식당</Title>
      <List>
        {restaurants.map((restaurant) => (
          <Item key={restaurant.id}>
            <div onClick={handleClick(restaurant)}>
              <img src="/img/restaurants.png" alt="" />
            </div>
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </Item>
        ))}
      </List>
    </>
  );
}

RestaurantsContainer.propTypes = {
  onClickRestaurant: PropTypes.func,
}