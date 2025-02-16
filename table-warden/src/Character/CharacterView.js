import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const CharacterView = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find(character => character.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h1>Character Details</h1>
      <p>Name: {character.name}</p>
      <p>Age: {character.age}</p>
      <p>Description: {character.description}</p>
      <p>Birthday: {character.birthday}</p>
      <p>Status: {character.isDead ? 'Dead' : 'Alive'}</p>
      {character.isDead && <p>Date of Death: {character.dateOfDeath}</p>}
      <div>
        <Link to="/list">Back to List</Link>
      </div>
    </div>
  );
};

export default CharacterView;