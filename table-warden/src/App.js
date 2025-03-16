import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import CharacterCreation from './Character/CharacterCreation';
import CharacterList from './Character/CharacterList';
import CharacterEdit from './Character/CharacterEdit';
import CharacterView from './Character/CharacterView';
import PlaceList from './Place/PlaceList';
import PlaceCreation from './Place/PlaceCreation';
import PlaceEdit from './Place/PlaceEdit';
import PlaceView from './Place/PlaceView';

function App() {
  const [characters, setCharacters] = useState([]);
  const [places, setPlaces] = useState([]);

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

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const updatePlace = (updatedPlace) => {
    setPlaces(places.map(place => 
      place.id === updatedPlace.id ? updatedPlace : place
    ));
  };

  const removePlace = (id) => {
    setPlaces(places.filter(place => place.id !== id));
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);


  return (
    <Router>
      <div>
        <h1>Message from Backend:</h1>
        <p>{message}</p>
        <ConditionalMenu />
        <Routes>
          <Route path="/create" element={<CharacterCreation addCharacter={addCharacter} />} />
          <Route path="/list" element={<CharacterList characters={characters} removeCharacter={removeCharacter} />} />
          <Route path="/edit/:id" element={<CharacterEdit characters={characters} updateCharacter={updateCharacter} />} />
          <Route path="/view/:id" element={<CharacterView characters={characters} />} />
          <Route path="/placesList" element={<PlaceList places={places} removePlace={removePlace} />} />
          <Route path="/placesCreate" element={<PlaceCreation addPlace={addPlace} characters={characters} />} />
          <Route path="/placesEdit/:id" element={<PlaceEdit places={places} updatePlace={updatePlace} characters={characters} />} />
          <Route path="/placesView/:id" element={<PlaceView places={places} />} />
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalMenu() {
  const location = useLocation();
  const hideMenuPaths = ['/edit', '/view', '/placesList', '/placesCreate', '/placesEdit', '/placesView', '/create', '/list'];
  const shouldHideMenu = hideMenuPaths.some(path => location.pathname.startsWith(path));
  console.log(`Current path: ${location.pathname}, shouldHideMenu: ${shouldHideMenu}`);
  return !shouldHideMenu ? <Menu /> : null;
}

export default App;