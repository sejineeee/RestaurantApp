import styled from '@emotion/styled';

import SlideContainer from '../../components/SlideContainer';

const Background = styled.div({
  backgroundColor: '#FFBD60',
  height: '100vh',
  width: '100%',
});

const Container = styled.div({
  width: '80%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 80px',
  paddingTop: '108px',
  '& div': {
    flexShrink: 0,
  },
});

const Content = styled.div({
  padding: '0 32px',
  color: '#ffffff',
  fontFamily: 'Noto Sans KR, sans-serif',
  lineHeight: 1.3,
  '& p:nth-of-type(1)': {
    fontSize: '5.4rem',
    fontWeight: 'bold',
    marginTop: '80px',
    marginBottom: '22px',
  },
  '& p:nth-of-type(2)': {
    fontSize: '2.4rem',
  },
});

export default function HomePage() {
  return (
    <Background>
      <Container>
        <SlideContainer />
        <Content>
          <p>
            찾고 싶은 맛집을
            <br />
            한번에 볼 수 있어요!
          </p>
          <p>
            전국에 있는 모든 식당의 리뷰와 평점을
            <br />
            확인할 수 있어요.
          </p>
        </Content>
      </Container>
    </Background>
  );
}
