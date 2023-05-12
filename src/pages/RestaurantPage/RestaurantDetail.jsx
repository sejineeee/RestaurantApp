import React from 'react';

import { AiOutlineEnvironment } from 'react-icons/ai';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Container = styled.div({
  fontFamily: 'Noto Sans KR, sans-serif',
  width: '500px',
  position: 'relative',
  marginBottom: '16px',

  '& p': {
    fontSize: '1.6rem',
  },

  '& h3': {
    fontSize: '2.8rem',
    margin: '50px 0 16px 48px',
  },
});

const Title = styled.h2({
  fontSize: '3.4rem',
  display: 'flex',
  '&::before': {
    content: '""',
    display: 'block',
    width: '36px',
    height: '36px',
    backgroundColor: '#FFBD60',
    marginRight: '8px',
  },
});

const Address = styled.p({
  fontSize: '1.8rem',
  position: 'absolute',
  right: '32px',
  top: '8px',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;
  return (
    <Container>
      <Title>{name}</Title>
      <Address>
        <AiOutlineEnvironment />
        주소 : {''}
        {address}
      </Address>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Container>
  );
}

export default React.memo(RestaurantDetail);
