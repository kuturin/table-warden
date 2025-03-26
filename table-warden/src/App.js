import React, { useState } from 'react';
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
import EventList from './Event/EventList';
import EventCreation from './Event/EventCreation';
import EventEdit from './Event/EventEdit';
import EventView from './Event/EventView';
import Timeline from './Event/timeline/timeline';
import GroupCreation from './Character/Group/GroupCreation';
import GroupEdit from './Character/Group/GroupEdit';
import GroupList from './Character/Group/GroupList';
import GroupView from './Character/Group/GroupView';


function App() {
  const [characters, setCharacters] = useState([]);
  const [places, setPlaces] = useState([]);
  const [events, setEvents] = useState([]);
  const [groups, setGroups] = useState([]);

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

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const removeEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const updateGroup = (updatedGroup) => {
    setGroups(groups.map((group) => (group.id === updatedGroup.id ? updatedGroup : group)));
  };

  const removeGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  return (
    <Router>
      <div>
        <ConditionalMenu />
        <Routes>
        <Route path="/create" element={<CharacterCreation addCharacter={addCharacter} addEvent={addEvent} groups={groups} />} /> 
          <Route path="/list" element={<CharacterList characters={characters} removeCharacter={removeCharacter} />} />
          <Route path="/edit/:id" element={<CharacterEdit characters={characters} updateCharacter={updateCharacter} groups={groups} />} />
          <Route path="/view/:id" element={<CharacterView characters={characters} groups={groups} />} />
          <Route path="/placesList" element={<PlaceList places={places} removePlace={removePlace} />} />
          <Route path="/placesCreate" element={<PlaceCreation addPlace={addPlace} addEvent={addEvent} characters={characters} />} /> 
          <Route path="/placesEdit/:id" element={<PlaceEdit places={places} updatePlace={updatePlace} characters={characters} />} />
          <Route path="/placesView/:id" element={<PlaceView places={places} />} />
          <Route path="/eventsCreate" element={<EventCreation addEvent={addEvent} characters={characters} places={places} />} />
          <Route path="/eventsList" element={<EventList events={events} removeEvent={removeEvent}  />} />
          <Route path="/eventsEdit/:id" element={<EventEdit events={events} updateEvent={updateEvent} characters={characters} places={places} />} />
          <Route path="/eventsView/:id" element={<EventView events={events} characters={characters} places={places} />} />
          <Route path="/timeline" element={<Timeline events={events} />} />
          <Route path="/groupsCreate" element={<GroupCreation addGroup={addGroup} characters={characters} />} />
          <Route path="/groupsList" element={<GroupList groups={groups} removeGroup={removeGroup} />} />
          <Route path="/groupsEdit/:id" element={<GroupEdit groups={groups} updateGroup={updateGroup} characters={characters} />} />
          <Route path="/groupsView/:id" element={<GroupView groups={groups} characters={characters} />} />
      
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalMenu() {
  const location = useLocation();
  const hideMenuPaths = ['/edit', '/view', '/placesList', '/placesCreate', '/placesEdit', '/placesView', '/create', '/list', '/eventsList', '/eventsCreate', '/eventsEdit', '/eventsView', '/timeline', '/groupsCreate', '/groupsList', '/groupsEdit', '/groupsView'];
  const shouldHideMenu = hideMenuPaths.some(path => location.pathname.startsWith(path));
  console.log(`Current path: ${location.pathname}, shouldHideMenu: ${shouldHideMenu}`);
  return !shouldHideMenu ? <Menu /> : null;
}

export default App;