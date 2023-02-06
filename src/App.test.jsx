import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

import { loadItem } from './services/storage';

jest.mock('react-redux');
jest.mock('./services/api');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path "/"', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path "/about"', () => {
    it('renders AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('EATGO?');
    });
  });

  context('with path "/restaurants"', () => {
    it('renders Restaurants', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });

  context('when logged in', () => {
    const accessToken = 'ACCESS_TOKEN';
    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
    });

    it('calls dispatch with setAccessToken action', () => {
      renderApp({ path: '/' });
      expect(dispatch).toBeCalledWith({
        type: 'application/setAccessToken',
        payload: accessToken,
      });
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it("doesn't call dispatch with setAccessToken action", () => {
      renderApp({ path: '/' });
      expect(dispatch).not.toBeCalled();
    });
  });
});
