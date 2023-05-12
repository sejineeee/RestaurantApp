import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../../../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('renders RegionsContainer', () => {
    const { getByText } = render((<RegionsContainer />));

    expect(getByText('서울')).not.toBeNull();
  });

  it('clicks buttons', () => {
    const { getByText } = render((<RegionsContainer />));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalled();
  });
});
