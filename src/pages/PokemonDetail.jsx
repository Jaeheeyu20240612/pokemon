import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../mock';

const DetailPokemonDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PokemonName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 1em;
`;
const DescriptionStyle = styled.p`
  margin-bottom: 1em;
`;

const BackButton = styled.button`
  padding: 1em;
  border-radius: 8px;
  border: none;
  background-color: black;
  color: white;
  margin-top: 1em;
  cursor: pointer;
`;
const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const queryParameter = new URLSearchParams(location.search);
  const pokemonId = queryParameter.get('id');
  // console.log(pokemonId);
  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  const types =
    pokemon.types.length >= 2 ? pokemon.types.join(', ') : pokemon.types;
  return (
    <DetailPokemonDiv>
      <img
        style={{ width: '200px', height: '200px' }}
        src={pokemon.img_url}
        alt=''
      />
      <PokemonName>{pokemon.name}</PokemonName>
      <DescriptionStyle>
        타입: {types}
        <br />
        <br />
        {pokemon.description}
      </DescriptionStyle>
      <BackButton
        onClick={() => {
          navigate('/dex');
        }}
      >
        뒤로 가기
      </BackButton>
    </DetailPokemonDiv>
  );
};

export default PokemonDetail;
