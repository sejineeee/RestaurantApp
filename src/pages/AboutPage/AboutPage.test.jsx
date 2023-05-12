import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders AboutPage', () => {
    const { container } = render((<AboutPage />));

    expect(container).toHaveTextContent('EATGO?');
    expect(container).toContainHTML('<img src="');
  });
});
