import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
const DetailPokemonDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PokemonDetail = () => {
  const location = useLocation();
  console.log('location?', location);
  const { pokemon } = location.state;
  return (
    <DetailPokemonDiv>
      <img
        style={{ width: '200px', height: '200px' }}
        src={pokemon.imgUrl}
        alt=''
      />
      <h3>{pokemon.name}</h3>
      <p>타입: {pokemon.type}</p>
      <p>{pokemon.description}</p>
    </DetailPokemonDiv>
  );
};

export default PokemonDetail;
