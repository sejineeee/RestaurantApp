import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

jest.mock('react-redux');

describe('MenuItems', () => {
  context('with menu items', () => {
    const menuItems = [
      { id: 1, name: '샐러드' },
      { id: 2, name: '파스타' },
    ];

    it('renders menuItems', () => {
      const { container } = render((
        <MenuItems menuItems={menuItems} />
      ));

      expect(container).toHaveTextContent('샐러드');
      expect(container).toHaveTextContent('파스타');
    });
  });
  context('with undefined menu item', () => {
    it('renders no items message', () => {
      const { container } = render((
        <MenuItems />
      ));

      expect(container).toHaveTextContent('메뉴가 없습니다.');
    });
  });

  context('without menu item', () => {
    it('renders no items message', () => {
      [[], undefined].forEach((menuItems) => {
        const { container } = render((
          <MenuItems menuItems={menuItems} />
        ));

        expect(container).toHaveTextContent('메뉴가 없습니다.');
      });
    });
  });
});
