import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const Button = styled.button({
  backgroundColor: 'transparent',
  border: 'none',
  lineHeight: 0,
  letterSpacing: '.2rem',
  fontSize: '1.8rem',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  color: '#555555',
  cursor: 'pointer',
  '&:hover': {
    color: '#D78521',
  },
});

export default function LogoutForm({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Log out
    </Button>
  );
}

LogoutForm.propTypes = {
  onClick: PropTypes.func
}
