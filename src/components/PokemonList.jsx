import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  align-items: center;

  margin-top: 1em;
  border-radius: 10px;
  box-shadow: rgba(9, 2, 2, 0.338) 0px 4px 8px;
  background-color: #afafaf;
`;

const PokemonList = ({ pokemonList, onAddPokemon, Card }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{
            id: pokemon.id,
            imgUrl: pokemon.img_url,
            name: pokemon.korean_name,
            type: pokemon.types,
            description: pokemon.description,
          }}
          onAdd={() => {
            onAddPokemon(pokemon);
          }}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
