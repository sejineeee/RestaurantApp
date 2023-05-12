import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from '../../slice';

import { loadRestaurants } from '../../async-action';

import { get } from '../../utils';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClick}
    />
  );
}
