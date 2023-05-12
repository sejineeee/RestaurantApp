import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged out', () => {
    given('accessToken', () => '');
    it('renders input controls', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
    });

    it('listens change event', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeLoginField',
        payload: { name: 'email', value: 'new email' },
      });
    });

    it('renders "Log In" button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log out" button', () => {
      const { container } = render((
        <LoginFormContainer />
      ));

      expect(container).toHaveTextContent('Log out');
    });

    it('clicks "Log out" button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({
        type: 'application/logout',
      });
    });
  });
});
