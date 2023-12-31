import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/elements/Button';
import styled from 'styled-components';

const HomeTitle = styled.h1`
  text-align: center;
  margin-bottom: 100px;
`;
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & button:first-child {
    margin-right: 20px;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const handleMoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.name);
  };

  return (
    <>
      <HomeTitle>Todo</HomeTitle>
      <HomeContainer>
        <Button name='signin' type='submit' size='md' onClick={handleMoveClick}>
          SignIn
        </Button>
        <Button name='signup' type='submit' size='md' onClick={handleMoveClick}>
          SignUp
        </Button>
      </HomeContainer>
    </>
  );
};

export default Home;
