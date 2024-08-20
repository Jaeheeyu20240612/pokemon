import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  justify-content: center;
  align-items: center;

  margin-top: 1em;
  margin-bottom: 3em;
  border: 1px solid #2f0a6b;
  border-radius: 10px;
  background-color: white;
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
