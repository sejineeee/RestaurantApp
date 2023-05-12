import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { loadItem } from '../services/storage';

import LogoutFormContainer from './LogoutFormContainer';

const Container = styled.header({
  width: '90%',
  margin: '0 auto',
  borderBottom: '1px solid #cccccc',
  position: 'relative',
  height: '114px',
});

const Title = styled.h1({
  width: '110px',
  height: '110px',
  margin: 0,
  '& a': {
    color: 'transparent',
    textDecoration: 'none',
    display: 'block',
    background: 'no-repeat url("/img/logo.jpg")',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
  },
});

const Nav = styled.nav({
  position: 'absolute',
  bottom: '6px',
  right: 0,
  '& a': {
    textDecoration: 'none',
    marginRight: '4.8rem',
    lineHeight: '1.8',
    letterSpacing: '.2rem',
    color: '#555555',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    '&:hover': {
      color: '#D78521',
    },
  },
});

export default function Header() {
  const accessToken = loadItem('accessToken');

  return (
    <Container>
      <Title><Link to="/">EatGo</Link></Title>
      <Nav>
        <Link to="/about">About</Link>
        <Link to="/restaurants">Restaurants</Link>
        { accessToken ? (
          <LogoutFormContainer />
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </Nav>
    </Container>
  );
}
