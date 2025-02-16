import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const CharacterView = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find(character => character.id === parseInt(id));

<<<<<<< HEAD
  if (!character) { 
    return <div>Character not found</div>;
  }

  return ( // Display the character's details
    <div> 
=======
  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
>>>>>>> 1b0cb7f602e0e351bb73047abc6531085b54f6f3
      <h1>Character Details</h1>
      <p>Name: {character.name}</p>
      <p>Age: {character.age}</p>
      <p>Description: {character.description}</p>
      <p>Birthday: {character.birthday}</p>
      <p>Status: {character.isDead ? 'Dead' : 'Alive'}</p>
      {character.isDead && <p>Date of Death: {character.dateOfDeath}</p>}
      <div>
<<<<<<< HEAD
        <Link to="/list">Back to List</Link> 
=======
        <Link to="/list">Back to List</Link>
>>>>>>> 1b0cb7f602e0e351bb73047abc6531085b54f6f3
      </div>
    </div>
  );
};

export default CharacterView;