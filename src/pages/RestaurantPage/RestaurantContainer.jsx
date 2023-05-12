import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant, sendReview } from '../../async-action';

import { changeReviewField, setIsOpenModal } from '../../slice';

import { get } from '../../utils';

import RestaurantDetail from './RestaurantDetail';
import Reviews from './Reviews';
import Modal from '../../components/Modal';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const isOpen = useSelector(get('isOpenModal'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
    dispatch(setIsOpenModal(false));
  }, [dispatch, restaurantId]);

  if (!restaurant) {
    return (
      <p>Loading ...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {
        accessToken && isOpen
          ? (
            <Modal
              title="리뷰쓰기"
              fields={reviewFields}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          ) : null
      }
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
