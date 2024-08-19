import React from 'react';
import styled from 'styled-components';
import { Card } from './PokemonCard';
import FormatId from '../utils/FormatId';
const DashboardContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: #afafaf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const DashboardTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  margin-top: 0.5em;
  padding: 1em;
  color: #290808;
`;
const DashBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 1.5em;
  text-align: center;
  justify-content: space-around;
`;

const PoketBall = styled.img`
  width: 100px;
  height: 100px;
  background-image: url('https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png');
  background-size: cover;
  background-position: center;
  background-repeat: none;
`;
const selectedBox = {
  width: '100px',
  height: '100px',
  border: '1px solid gray',
  padding: '1em',
};

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer style={{ width: '90%' }}>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      {selectedPokemon.length === 0 ? (
        <DashBox>
          <PoketBall />
          <PoketBall />
          <PoketBall />
          <PoketBall />
          <PoketBall />
          <PoketBall />
        </DashBox>
      ) : (
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {selectedPokemon.map((pokemon) => (
            <Card>
              <li key={pokemon.id}>
                <img src={pokemon.img_url} alt='' />
                <p>{pokemon.korean_name}</p>
                <p>{FormatId(pokemon.id)}</p>
              </li>
            </Card>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
