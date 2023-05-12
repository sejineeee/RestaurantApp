import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';
import restaurants from '../../../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsPage', () => {
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

  function renderRestaurantsPage() {
    return render((
        <MemoryRouter>
            <RestaurantsPage />
        </MemoryRouter>
    ));
  }

  it('renders region and category select buttons', () => {
    const { getByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('한식')).not.toBeNull();
  });

  it('renders links of restaurants ', () => {
    const { container } = renderRestaurantsPage();

    expect(container.innerHTML).toContain('<a href="');
  });
});
