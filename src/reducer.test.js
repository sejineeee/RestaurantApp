import reducer, {
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
  setReviews,
  clearReviewField,
} from './slice';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions,
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual(regions[0]);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories,
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual(categories[0]);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마녀식당' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마녀식당');
    });
  });

  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes login fields', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(initialState, changeLoginField({
          name: 'email',
          value: 'test@test',
        }));

        expect(state.loginFields.email).toBe('test@test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('when password is changed', () => {
      it('changes login fields', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(initialState, changeLoginField({
          name: 'password',
          value: '1234',
        }));

        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('1234');
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes aceessToken', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('logout', () => {
    it('return empty', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('changeReviewField', () => {
    it('changes review field', () => {
      const initialState = {
        reviewFields: {
          score: '',
          description: '',
        },
      };

      const state = reducer(initialState, changeReviewField({
        name: 'score',
        value: '5',
      }));

      expect(state.reviewFields.score).toBe('5');
    });
  });

  describe('cleareReviewField', () => {
    it('clears review field', () => {
      const initialState = {
        reviewFields: {
          score: '5',
          description: '정말 맛있어요',
        },
      };

      const state = reducer(initialState, clearReviewField());

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('setReviews', () => {
    it('changes reviews of the current restaurant', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '굿', score: 4,
        },
      ];

      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const state = reducer(initialState, setReviews(reviews));

      expect(state.restaurant.reviews).toHaveLength(1);
      expect(state.restaurant.reviews[0]).toEqual(reviews[0]);
    });
  });
});
