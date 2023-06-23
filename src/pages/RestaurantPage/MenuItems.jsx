import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const MenuList = styled.ul({
  marginLeft: '48px',
});

const MenuItem = styled.li({
  fontSize: '2.2rem',
  fontWeight: 'bold',
  lineHeight: 1.5,
});

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없습니다.</p>
    );
  }

  return (
    <MenuList>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          {menuItem.name}
        </MenuItem>
      ))}
    </MenuList>
  );
}

MenuItems.propTypes = {
  menuItems: PropTypes.array,
}
