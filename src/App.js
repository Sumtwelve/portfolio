import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';         // Home page 
import Music from './pages/Music';       // Music page
import Webdev from './pages/Webdev';     // Web Developer Portfolio page
import Games from './pages/Games';       // Games page
import About from './pages/About';       // About page
import Resume from './pages/Resume';     // Resume page
import Contact from './pages/Contact';   // Contact page

import Song from './pages/Song';         // page for viewing one Song
import Album from './pages/Album';       // page for viewing one Album
import Game from './pages/Game';         // page for viewing/playing one Game
//import Work from './pages/Work';         // details page for a single app/project

import NotFound from './pages/NotFound'; // 404 page

// Header, navbar, and footer are always visible.
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          {/* TODO: Reinstate this once the Music page is finished! */}
          {/* <Route
            path="/music/albums/:albumId"
            element={<Album />}
          />
          <Route
            path="/music/songs/:songId"
            element={<Song />}
          /> */}

          <Route 
            path="/dev"
            element={<Webdev />}
          />
          {/* There used to be subpages for Web Dev,
          but I decided that they crowded up the UX a little too much.
          Kept here in case I find a need for them. */}
          {/* <Route 
            path="/dev/:workId"
            element={<Work />}
          /> */}

          <Route 
            path="/games"
            element={<Games />}
          />
          {/* TODO: Reinstate this once the Music page is finished! */}
          {/* <Route 
            path="/games/:gameId"
            element={<Game />}
          /> */}

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
