import { useDispatch } from 'react-redux';

import { logout } from '../slice';

import LogoutForm from './LogoutForm';

export default function LogoutFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logout());
    localStorage.removeItem('accessToken');
  }

  return <LogoutForm onClick={handleClick} />;
}
