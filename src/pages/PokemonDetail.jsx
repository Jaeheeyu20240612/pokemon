import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = (pokemon) => {
  console.log('dddddd', pokemon);
  // const handleDetailPage = () => {};
  return (
    <div key={pokemon.id}>
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonDetail;
