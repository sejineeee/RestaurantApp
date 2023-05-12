import styled from '@emotion/styled';

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
