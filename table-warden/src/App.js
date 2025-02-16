import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import CharacterCreation from './Character/CharacterCreation';
import CharacterList from './Character/CharacterList';
import CharacterEdit from './Character/CharacterEdit';

function App() {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  const updateCharacter = (updatedCharacter) => {
    setCharacters(characters.map(character => 
      character.id === updatedCharacter.id ? updatedCharacter : character
    ));
  };

  const removeCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  return (
    <Router>
      <div>
        <ConditionalMenu />
        <Routes>
          <Route path="/create" element={<CharacterCreation addCharacter={addCharacter} />} />
          <Route path="/list" element={<CharacterList characters={characters} removeCharacter={removeCharacter} />} />
          <Route path="/edit/:id" element={<CharacterEdit characters={characters} updateCharacter={updateCharacter} />} />
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalMenu() {
  const location = useLocation();
  return location.pathname === '/' ? <Menu /> : null;
}

export default App;