import styled from '@emotion/styled';

import MenuList from '../../assets/emotion/MenuList';
import MenuItem from '../../assets/emotion/MenuItem';

import { categoriesImg } from '../../assets/selectionImg';

const Title = styled.div({
  fontFamily: 'Noto Sans KR, sans-serif',
  fontSize: '2.4rem',
  fontWeight: 'bold',
});

const ImgWrap = styled.div({
  border: '1px solid #C2C2C2',
  cursor: 'pointer',
});

export default function Categories({
  categories,
  selectedCategory,
  onClick,
}) {
  const CategoryImg = ({ category, onClick }) => categoriesImg.map((categoryImg) => (
    categoryImg?.alt === category.name
      ? (
        <ImgWrap onClick={() => onClick(category.id)}>
          <img src={categoryImg.src} alt={categoryImg.alt} />
        </ImgWrap>
      )
      : null
  ));

  return (
    <>
      <Title>종류</Title>
      <MenuList>
        {categories.map((category) => (
          <MenuItem key={category.id}>
            <CategoryImg category={category} onClick={onClick} />
            <button type="button" onClick={() => onClick(category.id)}>
              {category.name}
              {' '}
              { selectedCategory && category.id === selectedCategory.id ? '✅' : null }
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
}
