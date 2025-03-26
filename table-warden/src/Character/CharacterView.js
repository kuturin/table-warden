import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CharacterView = ({ characters, groups }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((character) => character.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  // Znajdź grupę, do której należy postać
  const group = groups.find((group) => group.id === character.groupId);

  return (
    <div>
      <h1>{character.name}</h1>
      <p><strong>Category:</strong> {character.category}</p>
      <p><strong>Age:</strong> {character.age}</p>
      <p><strong>Description:</strong> {character.description}</p>
      <p><strong>Birthday:</strong> {character.birthday || 'N/A'}</p>
      {character.isDead && <p><strong>Date of Death:</strong> {character.dateOfDeath}</p>}
      <p><strong>Group:</strong> {group ? group.name : 'None'}</p> {/* Wyświetlanie grupy */}
      <div>
        <button onClick={() => navigate(`/edit/${character.id}`)}>Edit</button>
        <button onClick={() => navigate('/list')}>Back to List</button>
      </div>
    </div>
  );
};

export default CharacterView;