import { useState } from 'react';

import styled from '@emotion/styled';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import sliderImg from '../assets/slider-img';

import SlideItem from './SlideItem';

const SlideWrap = styled.div({
  overflow: 'hidden',
  width: '514px',
  height: '514px',
  borderRadius: '60px',
  position: 'relative',
});

const SlideBox = styled.div(({ count, transition }) => ({
  display: 'flex',
  position: 'absolute',
  transform: `translateX(${count * -514}px)`,
  transition,
}));

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '50%',
  transform: 'translate(50%, 32px)',
});

const Button = styled.button({
  backgroundColor: '#ffffff',
  width: '65px',
  height: '58px',
  color: '#FFBD60',
  borderRadius: '19px',
  fontSize: '2.4rem',
});

export default function SlideContainer() {
  const [count, setCount] = useState(1);
  const [transition, setTransition] = useState('');

  const slideList = [...sliderImg];

  slideList.unshift(slideList[slideList.length - 1]);
  slideList.push(slideList[1]);

  const transitionList = {
    transition: () => 'transform ease-in-out 1s',
    resetTransition: () => '',
  };

  function handlePrevClick() {
    if (count > 0) {
      setCount(count - 1);
      setTransition(transitionList.transition());
    } else {
      setCount(slideList.length - 2);
      setTransition(transitionList.resetTransition());
    }
  }

  function handleNextClick() {
    if (count < slideList.length - 1) {
      setCount(count + 1);
      setTransition(transitionList.transition());
    } else {
      setCount(1);
      setTransition(transitionList.resetTransition());
    }
  }

  return (
    <div>
      <SlideWrap>
        <SlideBox count={count} transition={transition}>
          {slideList.map((slide, index) => (
            <SlideItem
              key={index}
              src={slide.src}
              alt={slide.alt}
            />
          ))}
        </SlideBox>
      </SlideWrap>
      <ButtonContainer>
        <Button
          type="button"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          type="button"
          onClick={handleNextClick}
        >
          <IoIosArrowForward />
        </Button>
      </ButtonContainer>
    </div>
  );
}
