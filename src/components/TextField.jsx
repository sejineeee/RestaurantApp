import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const Container = styled.div({
  '& label': {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    lineHeight: '1.3',
    margin: '8px 0',
  },
  display: 'flex',
  flexDirection: 'column',
});

const Field = styled.input(({ name }) => ({
  width: name === 'score' ? '180px' : '100%',
  height: name === 'score' ? '34px' : '200px',
  border: '1px solid #D9D9D9',
  borderRadius: '5px',
  padding: '8px 16px',
  boxSizing: 'border-box',
}));

export default function TextField({
  label,
  type = 'text',
  name,
  value,
  onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Field
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
