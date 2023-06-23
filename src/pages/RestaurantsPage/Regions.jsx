import styled from '@emotion/styled';

import MenuList from '../../assets/emotion/MenuList';
import MenuItem from '../../assets/emotion/MenuItem';

import { regionsImg } from '../../assets/selectionImg';

import PropTypes from 'prop-types';

const Title = styled.div({
  fontFamily: 'Noto Sans KR, sans-serif',
  fontSize: '2.4rem',
  fontWeight: 'bold',
});

const ImgWrap = styled.div({
  border: '1px solid #C2C2C2',
  cursor: 'pointer',
});

export default function Regions({
  regions,
  onClick,
  selectedRegion,
}) {
  const MenuItemImage = ({ region, onClick }) => regionsImg.map((regionImg) => (
    regionImg.alt === region.name
      ? (
        <ImgWrap key={regionImg.id} onClick={() => onClick(region.id)}>
          <img src={regionImg.src} alt={regionImg.alt} />
        </ImgWrap>
      )
      : null
  ));

  return (
    <>
      <Title>지역</Title>
      <MenuList>
        {
          regions.map((region) => (
            <MenuItem
              key={region.id}
              active={selectedRegion && region.id === selectedRegion.id}
            >
              <MenuItemImage region={region} onClick={onClick} />
              <button
                key={region.id}
                type="button"
                onClick={() => onClick(region.id)}
              >
                {region.name}
                {
                selectedRegion
                && region.id === selectedRegion.id
                  ? '✅'
                  : null
                }
              </button>
            </MenuItem>
          ))
        }
      </MenuList>
    </>
  );
}

Regions.propTypes = {
  regions: PropTypes.array,
  onClick: PropTypes.func,
  selectedRegion: PropTypes.string,
}