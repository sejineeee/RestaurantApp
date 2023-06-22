import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import {
  IoIosArrowBack,
  IoIosPause,
  IoIosPlay,
  IoIosArrowForward,
} from 'react-icons/io';

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
  const [pause, setPause] = useState(false);

  const slideList = [...sliderImg];

  slideList.unshift(slideList[slideList.length - 1]);
  slideList.push(slideList[1]);

  useEffect(() => {
    let timer;
    if (!pause) {
      timer = setInterval(() => {
        setCount((prev) => (prev + 1) % slideList.length);
      }, 2500);
    }

    return () => {
      clearInterval(timer);
    };
  }, [pause]);

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

  function handlePause() {
    setPause(!pause);
  }

  return (
    <div>
      <SlideWrap>
        <SlideBox count={count} transition={transition}>
          {slideList.map((slide, index) => (
            <SlideItem key={index} src={slide.src} alt={slide.alt} />
          ))}
        </SlideBox>
      </SlideWrap>
      <ButtonContainer>
        <Button type="button" onClick={handlePrevClick}>
          <IoIosArrowBack />
        </Button>
        <Button type="button" onClick={handlePause}>
          {pause ? <IoIosPlay /> : <IoIosPause />}
        </Button>
        <Button type="button" onClick={handleNextClick}>
          <IoIosArrowForward />
        </Button>
      </ButtonContainer>
    </div>
  );
}
