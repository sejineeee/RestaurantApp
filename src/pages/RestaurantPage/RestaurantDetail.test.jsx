import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마녀식당',
    address: '서울시 강남구 역삼동',
  };
  it('renders name and address', () => {
    const { container } = render((
      <RestaurantDetail restaurant={restaurant} />
    ));

    expect(container).toHaveTextContent('마녀식당');
    expect(container).toHaveTextContent('서울시 강남구 역삼동');
  });
});
