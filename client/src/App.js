import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Home from './pages/Home';
import Music from './pages/Music';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';
import Webdev from './pages/Webdev';

// header is always visible
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex-column">
        <Header />
        <Navbar />
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
          <Route 
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
