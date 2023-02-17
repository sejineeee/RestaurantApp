import { createSlice } from '@reduxjs/toolkit';

import { equal } from './utils';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
  reviewFields: {
    ...initialReviewFields,
  },
  isOpenModal: false,
};

const reducers = {
  setRegions(state, { payload: regions }) {
    return {
      ...state,
      regions,
    };
  },
  setCategories(state, { payload: categories }) {
    return {
      ...state,
      categories,
    };
  },
  selectRegion(state, { payload: regionId }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },
  selectCategory(state, { payload: categoryId }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
  setRestaurants(state, { payload: restaurants }) {
    return {
      ...state,
      restaurants,
    };
  },
  setRestaurant(state, { payload: restaurant }) {
    return {
      ...state,
      restaurant,
    };
  },
  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
    };
  },
  setAccessToken(state, { payload: accessToken }) {
    return {
      ...state,
      accessToken,
    };
  },
  logout(state) {
    return {
      ...state,
      accessToken: '',
    };
  },
  changeReviewField(state, { payload: { name, value } }) {
    return {
      ...state,
      reviewFields: {
        ...state.reviewFields,
        [name]: value,
      },
    };
  },
  clearReviewField(state) {
    return {
      ...state,
      reviewFields: {
        ...initialReviewFields,
      },
    };
  },
  setReviews(state, { payload: reviews }) {
    const { restaurant } = state;
    return {
      ...state,
      restaurant: {
        ...restaurant,
        reviews,
      },
    };
  },
  setIsOpenModal(state, { payload: value }) {
    return {
      ...state,
      isOpenModal: value,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
  setRestaurants,
  setRestaurant,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewField,
  setReviews,
  setIsOpenModal,
} = actions;

export default reducer;
