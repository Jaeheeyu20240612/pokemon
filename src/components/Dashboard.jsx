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
  margin-top: 50px;
`;
const DashboardTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 1.5em;
  padding: 1em;
  color: #faf7f7;
`;
const DashBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
`;

const PoketBall = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  background-image: url('https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png');
  background-size: cover;
  background-position: center;
  background-repeat: none;
`;
const selectedBox = {
  width: '100px',
  height: '100px',
  border: '1px solid gray',
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
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',

            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: '1em',
            gap: '2em',
          }}
        >
          {selectedPokemon.map((pokemon) => (
            <Card>
              <li key={pokemon.id}>
                <img
                  style={{ marginTop: '1em' }}
                  src={pokemon.img_url}
                  alt=''
                />
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
