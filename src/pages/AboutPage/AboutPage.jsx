import styled from '@emotion/styled';

const Container = styled.div({
  width: '90%',
  margin: '16px auto',
  display: 'flex',
  justifyContent: 'space-between',
});

const Content = styled.div({
  fontFamily: 'Noto Sans KR, sans-serif',
  padding: '80px 0 0',
  lineHeight: 1.5,
  '& h2': {
    fontSize: '5rem',
    fontFamily: 'Roboto, sans-serif',
    color: '#FFBD60',
  },
  '& p': {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    width: '440px',
  },
});

const VerticalLine = styled.div({
  width: '1px',
  height: '540px',
  padding: '16px 0',
  backgroundColor: '#585858',
});

const ImgBox = styled.div({
  padding: '32px 24px',
  '& img': {
    width: '100%',
    display: 'block',
  },
});

export default function AboutPage() {
  return (
    <Container>
      <Content>
        <h2>EATGO?</h2>
        <p>
          EATGO는 지역별, 종류별로 전국에 있는
          <br />
          맛집 정보를 제공하는 사이트입니다.
        </p>
      </Content>
      <VerticalLine />
      <ImgBox>
        <img src="/img/about-img.png" alt="" />
      </ImgBox>
    </Container>
  );
}
