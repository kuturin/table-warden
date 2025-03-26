import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupList = ({ groups, removeGroup }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Group List</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <div>
              <strong>{group.name}</strong>
              <p>{group.description}</p>
              <button onClick={() => navigate(`/groupsEdit/${group.id}`)}>Edit</button>
              <button onClick={() => navigate(`/groupsView/${group.id}`)}>View</button>
              <button onClick={() => removeGroup(group.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate('/groupsCreate')}>Create New Group</button>
      </div>
      <div>
        <button onClick={() => navigate('/list')}>View Characters</button> {/* Dodano przycisk do przejścia do CharacterList */}
      </div>
    </div>
  );
};

export default GroupList;