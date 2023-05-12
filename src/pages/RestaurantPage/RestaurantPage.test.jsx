import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '마녀식당',
        address: '서울시 강남구 역삼동',
      },
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  it('renders name', () => {
    const params = { id: '1' };
    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('마녀식당');
  });

  it('renders review write form', () => {
    const params = { id: '1' };
    const { queryByLabelText } = render((
      <RestaurantPage params={params} />
    ));

    expect(queryByLabelText('평점')).not.toBeNull();
  });
});
