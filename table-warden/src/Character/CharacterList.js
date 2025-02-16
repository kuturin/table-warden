import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    return (
        <div>
            <h1>Character List</h1>
            {/* Your CharacterList component code */}
            <div>
                <Link to="/create">Create Character</Link>
            </div>
        </div>
    );
};

export default CharacterList;