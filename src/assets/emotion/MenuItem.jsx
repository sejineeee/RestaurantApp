import styled from '@emotion/styled';

const MenuItem = styled.li(() => ({
  marginRight: '2rem',
  marginBottom: '1.6rem',
  fontSize: '1.6rem',
  fontFamily: 'Noto Sans KR, sans-serif',
  textAlign: 'center',

  '& div': {
    width: '124px',
    height: '124px',
    borderRadius: '50%',
    overflow: 'hidden',
    transition: 'all 1s',
  },

  '& img': {
    width: '124px',
    height: '124px',
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'block',
  },

  '& button': {
    fontSize: '1.6rem',
    fontFamily: 'Noto Sans KR, sans-serif',
    border: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000000',
    fontWeight: 'bold',
  },
}));

export default MenuItem;
