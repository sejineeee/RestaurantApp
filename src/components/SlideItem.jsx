import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const SlideImg = styled.img({
  width: '514px',
  height: '514px',
  objectFit: 'cover',
});

export default function SlideItem({ src, alt }) {
  return (
    <SlideImg
      src={src}
      alt={alt}
    />
  );
}

SlideItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}