import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders score and description', () => {
    const reviews = [
      {
        id: 1, name: '테스터', description: '굿', score: 4,
      },
    ];

    const { container } = render((
      <Reviews reviews={reviews} />
    ));

    expect(container).toHaveTextContent('굿');
    expect(container).toHaveTextContent('4');
  });
});
