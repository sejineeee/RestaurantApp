import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { requestLogin } from '../../async-action';

import { changeLoginField } from '../../slice';

import LoginForm from './LoginForm';

import { get } from '../../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [handleSubmit]);

  return (
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
