import React from 'react';import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CharacterCreation from './Character/CharacterCreation';
import CharacterList from './Character/CharacterList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create">Create Character</Link>
            </li>
            <li>
              <Link to="/list">Go to characters' list</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/create" element={<CharacterCreation />} />
          <Route path="/list" element={<CharacterList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;