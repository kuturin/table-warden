import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GroupView = ({ groups, characters }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const group = groups.find((group) => group.id === parseInt(id));

  if (!group) {
    return <div>Group not found</div>;
  }

  const groupCharacters = characters.filter((character) =>
    group.characters.includes(character.id)
  );

  return (
    <div>
      <h1>{group.name}</h1>
      <p>{group.description}</p>
      <h3>Characters in this group:</h3>
      <ul>
        {groupCharacters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate(`/groupsEdit/${group.id}`)}>Edit</button>
        <button onClick={() => navigate('/groupsList')}>Back to List</button>
      </div>
    </div>
  );
};

export default GroupView;