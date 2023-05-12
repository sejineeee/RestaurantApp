import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Container = styled.div({
  width: '516px',
  height: '516px',
  margin: 'auto auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const LogoBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    width: '63px',
    height: '63px',
  },
  '& h2': {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '4rem',
    padding: '0 0 18px 24px',
    position: 'relative',
  },
  '& h2::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 0,
    width: '70px',
    height: '4px',
    backgroundColor: '#D78521',
  },
});

export default function LoginPage() {
  return (
    <Container>
      <LogoBox>
        <img src="/img/logo-icon.png" alt="로고 아이콘" />
        <h2>EATGO</h2>
      </LogoBox>
      <LoginFormContainer />
    </Container>
  );
}
