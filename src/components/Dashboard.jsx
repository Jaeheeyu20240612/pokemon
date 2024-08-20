import React from 'react';
import styled from 'styled-components';
import { Card } from './PokemonCard';
import FormatId from '../utils/FormatId';

const DashboardContainer = styled.div`
  width: 80%;
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

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1em;
  gap: 1em;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  background-color: crimson;
  color: white;
  border-radius: 5px;
  margin-top: 1em;
`;
const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      {selectedPokemon.length === 0 ? (
        <DashBox>
          {Array.from({ length: 6 }, (_, index) => (
            <PoketBall key={index} />
          ))}
        </DashBox>
      ) : (
        <ListWrap>
          {selectedPokemon.map((pokemon) => (
            <Card style={{ marginTop: '0', width: '140px' }}>
              <li key={pokemon.id}>
                <img
                  style={{ marginTop: '1em' }}
                  src={pokemon.img_url}
                  alt=''
                />
                <p>{pokemon.korean_name}</p>
                <p style={{ marginTop: '10px' }}>{FormatId(pokemon.id)}</p>
                <DeleteButton
                  onClick={() => {
                    onRemovePokemon(pokemon);
                  }}
                >
                  삭제
                </DeleteButton>
              </li>
            </Card>
          ))}
        </ListWrap>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
