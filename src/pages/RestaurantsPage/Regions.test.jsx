import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../../fixtures/regions';

jest.mock('react-redux');

describe('Regions', () => {
  it('renders regions', () => {
    const { getByText } = render((<Regions regions={regions} />));

    expect(getByText('서울')).not.toBeNull();
  });
});
