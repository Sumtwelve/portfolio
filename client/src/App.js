import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Music, Webdev, Games, About, Resume, Contact } from './pages/';

function App() {
  return (
    <Router>
      <div className="flex-column">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/music"
            element={<Music />}
          />
          <Route 
            path="/webdev"
            element={<Webdev />}
          />
          <Route 
            path="/games"
            element={<Games />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
          <Route 
            path="/resume"
            element={<Resume />}
          />
          <Route 
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
