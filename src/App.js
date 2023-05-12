import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About'; // About page
import Album from './pages/Album'; // page for viewing one Album
import Contact from './pages/Contact'; // Contact page
import Games from './pages/Games'; // Games page
import Game from './pages/Game'; // page for viewing/playing one Game
import Home from './pages/Home'; // Home page 
import Music from './pages/Music'; // Music page
import NotFound from './pages/NotFound'; // 404 page
import Resume from './pages/Resume'; // Resume page
import Song from './pages/Song'; // page for viewing one Song
import Webdev from './pages/Webdev'; // Web Developer Portfolio page
import Work from './pages/Work'; // details page for one app/project (one Work) I've made

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
          <Route
            path="/music/album/:albumId"
            element={<Album />}
          />
          <Route
            path="/music/song/:songId"
            element={<Song />}
          />

          <Route 
            path="/dev"
            element={<Webdev />}
          />
          <Route 
            path="/dev/projects/:workId"
            element={<Work />}
          />

          <Route 
            path="/games"
            element={<Games />}
          />
          <Route 
            path="/games/:gameId"
            element={<Game />}
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
