import React from 'react';
import styled from 'styled-components';
import FormatID from '../utils/FormatID';
const Card = styled.div`
  width: 155px;
  height: 240px;
  text-align: center;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  border-radius: 10px;
  background-color: white;
`;
const Button = styled.button`
  margin-top: 1em;
  border: none;
  background-color: red;
  color: white;
  padding: 8px;
  border-radius: 5px;
`;
const PokemonCard = ({ pokemon, onAdd, onRemove, isSelected }) => {
  return (
    <Card>
      <div className='cardDiv'>
        <img
          style={{ width: '100px', height: '100px' }}
          src={pokemon.imgUrl}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
        <p>{FormatID(pokemon.id)}</p>
      </div>

      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
      ) : (
        <Button
          onClick={() => {
            onAdd(pokemon);
            isSelected = { isSelected };
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;
export { Card };
