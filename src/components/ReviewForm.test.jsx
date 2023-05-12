import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm({ score, description } = {}) {
    return render((
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders review write fields', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders values of fields', () => {
    const { queryByDisplayValue } = renderReviewForm({
      score: '5',
      description: '정말 맛있어요',
    });

    expect(queryByDisplayValue('5')).not.toBeNull();
    // expect(container).toHaveTextContent('정말 맛있어요');
  });

  it('listens change events', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '정말 맛있어요' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "리뷰 남기기" button', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
