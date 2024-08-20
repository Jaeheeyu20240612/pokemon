import React from 'react';
import styled from 'styled-components';
import FormatID from '../utils/FormatID';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  width: 155px;
  height: 240px;
  text-align: center;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
    transform: translateY(-5px);
  }
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: 1em;
  border: none;
  background-color: crimson;
  color: white;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: black;
    transition: 0.5s;
  }
`;

const PokemonCard = ({ pokemon, onAdd, onRemove, isSelected }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/detail?id=${pokemon.id}`);
      }}
    >
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
        <Button
          onClick={(e) => {
            // 이벤트의 전파 중단(카드 클릭 이벤트로 안가게)
            e.stopPropagation();
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
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
