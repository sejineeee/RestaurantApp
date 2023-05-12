import { useDispatch } from 'react-redux';

import { IoMdClose } from 'react-icons/io';

import styled from '@emotion/styled';

import { setIsOpenModal } from '../slice';

import ReviewForm from './ReviewForm';

const Overlay = styled.div({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
});

const Container = styled.div({
  zIndex: '1',
  width: '600px',
  height: '600px',
  backgroundColor: '#ffffff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Button = styled.button({
  padding: '8px',
  fontSize: '2.4rem',
  position: 'absolute',
  right: 0,
  top: 0,
});

const ReviewFormContainer = styled.div({
  fontFamily: 'Noto Sans KR, sans-serif',
  width: '60%',
  margin: 'auto',
  padding: '32px 0',

  '& p': {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    padding: '16px 0',

    '&::before': {
      content: '""',
      display: 'block',
      width: '110px',
      height: '2px',
      backgroundColor: '#FFBD60',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
});

export default function Modal({
  title,
  fields,
  onChange,
  onSubmit,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsOpenModal(false));
  };

  return (
    <Overlay>
      <Container>
        <Button
          type="button"
          onClick={handleClick}
        >
          <IoMdClose />
        </Button>
        <ReviewFormContainer>
          <p>{title}</p>
          <ReviewForm
            fields={fields}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </ReviewFormContainer>
      </Container>
    </Overlay>
  );
}
