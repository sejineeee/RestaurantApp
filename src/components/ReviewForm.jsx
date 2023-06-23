import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

import PropTypes from 'prop-types';

const Button = styled.button({
  fontFamily: 'Noto Sans KR, sans-serif',
  fontSize: '2.2rem',
  fontWeight: 'bold',
  lineHeight: 1.5,
  backgroundColor: '#FFBD60',
  color: '#ffffff',
  width: '180px',
  height: '60px',
  borderRadius: '15px',
  display: 'block',
  margin: '32px auto',
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;
  return (
    <div>
      <TextField
        label="평점"
        name="score"
        type="number"
        value={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        value={description}
        onChange={onChange}
      />
      <Button type="button" onClick={onSubmit}>
        리뷰 남기기
      </Button>
    </div>
  );
}

export default React.memo(ReviewForm);

ReviewForm.propTypes = {
  fields: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
