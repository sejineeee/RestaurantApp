import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from '../../async-action';

import { selectRegion } from '../../slice';

import { get } from '../../utils';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClick}
    />
  );
}
