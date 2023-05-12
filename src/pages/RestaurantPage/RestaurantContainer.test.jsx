import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '마녀식당',
        address: '서울시 강남구 역삼동',
        reviews: [
          {
            id: 1, name: '테스터', description: '굿', score: 4,
          },
        ],
      },
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: given.accessToken,
    }));
  });

  it('renders name and address', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    expect(container).toHaveTextContent('마녀식당');
    expect(container).toHaveTextContent('서울시 강남구 역삼동');
  });

  it('renders reviews', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    expect(container).toHaveTextContent('굿');
    expect(container).toHaveTextContent('4');
  });

  context('without logged-in', () => {
    it('no renders review write fields', () => {
      const { queryByLabelText } = render((
        <RestaurantContainer
          restaurantId="1"
        />
      ));

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('with logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    it('renders review write fields', () => {
      const { getByLabelText } = render((
        <RestaurantContainer
          restaurantId="1"
        />
      ));

      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('listens change events', () => {
      const { getByLabelText } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '정말 맛있어요' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith({
          type: 'application/changeReviewField',
          payload: { name, value },
        });
      });
    });

    it('renders "리뷰 남기기" button', () => {
      const { getByText } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      fireEvent.click(getByText('리뷰 남기기'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
