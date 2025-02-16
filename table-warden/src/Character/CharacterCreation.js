import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const CharacterCreation = () => {
    const [isDead, setIsDead] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsDead(event.target.checked);
    };

    return (
        <div>
            <div>
                Character's Name: <input type="text" />
            </div>
            <div>
                Character's Age: <input type="number" />
            </div>
            <div>
                Character's photo: <input type="file" />
            </div>
            <div>
                Character's Description: <textarea />
            </div>
            <div>
                Birthday: <input type="date" />
            </div>
            <div>
                <input type="checkbox" onChange={handleCheckboxChange} /> Dead
            </div>
            {isDead && (
                <div>
                    Date of Death: <input type="date" />
                </div>
            )}
            <div>
                <button>Save</button>
            </div>
            <div>
                <Link to="/list">Go to characters' list</Link>
            </div>
        </div>
    );
};

export default CharacterCreation;