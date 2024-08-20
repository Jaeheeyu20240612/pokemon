import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
import { Route, Routes } from 'react-router-dom';
const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    //   {* 포켓몬을 선택하는 로직을 완성해봅시다 *}
    setSelectedPokemon((selectedPokemon) => {
      if (selectedPokemon.find((p) => p.id === pokemon.id)) {
        return selectedPokemon;
      }
      if (selectedPokemon.length >= 6) {
        alert('포켓몬은 최대 여섯개까지만 선택 할 수 있어요.');
        return selectedPokemon;
      }
      return [...selectedPokemon, pokemon];
    });
  };
  console.log(selectedPokemon);
  const removePokemon = (pokemon) => {
    //   {* 제거는 필터를 이용해 봅시다 *}
    const filteredPokemon = selectedPokemon.filter((p) => p.id !== pokemon.id);
    setSelectedPokemon(filteredPokemon);
  };
  return (
    <div className='WrapBox'>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
