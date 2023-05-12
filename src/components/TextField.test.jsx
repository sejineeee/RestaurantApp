import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  function renderTextField({ label, type, name, value }) {
    return render(
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    );
  }

  context('with type', () => {
    it('renders "number" input control', () => {
      const { container, getByLabelText } = renderTextField({
        label: '평점',
        type: 'number',
        name: 'score',
      });

      expect(getByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    it('renders "text" input control', () => {
      const { container, getByLabelText } = renderTextField({
        label: '리뷰 내용',
        name: 'description',
      });

      expect(getByLabelText('리뷰 내용')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  it('renders value', () => {
    const { getByLabelText } = renderTextField({
      label: '평점',
      type: 'number',
      value: '5',
      name: 'score',
    });

    expect(getByLabelText('평점').value).toBe('5');
  });

  it('listens change events', () => {
    const name = 'score';
    const value = '3';

    const { getByLabelText } = renderTextField({
      label: '평점',
      type: 'number',
      name: 'score',
    });

    fireEvent.change(getByLabelText('평점'), {
      target: { value },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
