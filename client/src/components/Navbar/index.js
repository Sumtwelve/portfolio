import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: Yes I am aware I'm putting buttons inside an anchor tags here.
// Normally that is a no-no, but I'm using buttons only because
// they offer automatic text centering. The buttons have no functionality
// on their own, so I think it's ok to have them inside anchors.

const Navbar = ({ currentPath }) => {
    return (
        <nav className={`top-bar${currentPath === '/' ? " top-bar-home" : ""}`}>
            <Link to='/music' className='link-music'>
                <span className='music-behind btn-behind'></span>
                <button type="button" className="music-btn">MUSIC</button>
            </Link>
            <Link to={`${currentPath === '/webdev' ? '..' : '/webdev'}`} className='link-webdev'>
                <span className='webdev-behind btn-behind'></span>
                <button type="button" className='webdev-btn'>WEB DEV</button>
            </Link>
            <Link to='/games' className='link-games'>
                <span className='games-behind btn-behind'></span>
                <button type="button" className='games-btn'>GAMES</button>
            </Link>
            <Link to='/about' className='link-about'>
                <span className='about-behind btn-behind'></span>
                <button type="button" className='about-btn'>ABOUT</button>
            </Link>
            <Link to='/resume' className='link-resume'>
                <span className='resume-behind btn-behind'></span>
                <button type="button" className='resume-btn'>RESUME</button>
            </Link>
            <Link to='/contact' className='link-contact'>
                <span className='contact-behind btn-behind'></span>
                <button type="button" className='contact-btn'>CONTACT</button>
            </Link>
        </nav>
    )
};

export default Navbar;