import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.6rem',
  fontFamily: 'Roboto, sans-serif',
  '& label': {
    fontWeight: 'bold',
    marginTop: '29px',
    marginBottom: '16px',
  },
  '& input': {
    width: '313px',
    height: '42px',
    border: '1px solid #D8D8D8',
    borderRadius: '13px',
    padding: '8px 16px',
    fontSize: '1.6rem',
    letterSpacing: '1px',
    '&::placeholder': {
      fontFamily: 'Noto Sans KR, sans-serif',
    },
    '&:focus': {
      outline: '1px solid #FFBD60',
    },
  },
});

const Button = styled.button({
  backgroundColor: '#D78521',
  color: '#ffffff',
  fontSize: '1.6rem',
  fontFamily: 'Noto Sans KR, sans-serif',
  letterSpacing: '2px',
  width: '150px',
  height: '42px',
  borderRadius: '32px',
  marginTop: '43px',
});

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <Container>
        <label htmlFor="login-email">E-mail</label>
        <input
          type="text"
          id="login-email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleChange}
        />
      </Container>
      <Container>
        <label htmlFor="login-password">Password</label>
        <input
          type="text"
          id="login-password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handleChange}
        />
      </Container>
      <Button
        type="button"
        onClick={onSubmit}
      >
        로그인
      </Button>
    </>
  );
}

LoginForm.propTypes = {
  fields: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
