import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const HomeWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 100vw;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
`;
const Home = () => {
  const navigate = useNavigate();
  const buttonStyle = {
    padding: '1em',
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '10px',
  };
  return (
    <HomeWrap>
      <img
        style={{ width: '50%' }}
        src='https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png'
        alt=''
      />
      <button
        className='go-dex-button'
        onClick={() => {
          navigate('/dex');
        }}
        style={buttonStyle}
      >
        포켓몬 도감 시작하기
      </button>
    </HomeWrap>
  );
};

export default Home;
