import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../../fixtures/categories';

jest.mock('react-redux');

describe('Categories', () => {
  it('renders categories', () => {
    const { getByText } = render((<Categories categories={categories} />));

    expect(getByText('한식')).not.toBeNull();
  });
});
