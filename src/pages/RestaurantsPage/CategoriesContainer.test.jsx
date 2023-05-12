import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('renders CategoriesContainer', () => {
    const { getByText } = render((<CategoriesContainer />));

    expect(getByText('한식')).not.toBeNull();
  });

  it('clicks buttons', () => {

  });
});
