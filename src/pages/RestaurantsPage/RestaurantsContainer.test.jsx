import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../../../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  const handleClick = jest.fn();

  it('renders RestaurantsContainer', () => {
    const { getByText } = render(
      <RestaurantsContainer onClickRestaurant={handleClick} />
    );

    expect(getByText(/김밥천국/)).not.toBeNull();
  });
});
