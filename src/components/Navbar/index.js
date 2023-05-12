import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

// NOTE: Yes I am aware I'm putting buttons inside an anchor tags here.
// Normally that is a no-no, but I'm using buttons only because
// they offer automatic text centering. The buttons have no functionality
// on their own, so I think it's ok to have them inside anchors.

const Navbar = () => {
    // code to change 'menu' to 'close' when clicked,
    // also to change icon from bars to X when clicked
    const [menuText, setMenuText] = useState('menu');
    const [menuIcons, setMenuIcon] = useState(faBars);

    /**
     * Applies/removes the 'menu-display' class for each Link in the menu nav.
     */
    function toggleMenu() {
        document.querySelectorAll(".react-link").forEach((tag) => {
            tag.classList.toggle("menu-display");
        });
        if (menuText === "menu") {
            setMenuText("close");
            setMenuIcon(faX);
        } else {
            setMenuText("menu")
            setMenuIcon(faBars);
        }
    }

    return (
        <nav>
            <div className='menu-header' onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuIcons} className='menu-btn' />
                <h3 className='menu-text'>{menuText}</h3>
            </div>
            <Link to='/music' className='react-link link-music' onClick={toggleMenu}>
                <span className='btn-behind music-behind'></span>
                <button type="button" className="music-btn">MUSIC</button>
            </Link>
            <Link to='/dev' className='react-link link-webdev' onClick={toggleMenu}>
                <span className='btn-behind webdev-behind'></span>
                <button type="button" className='webdev-btn'>WEB DEV</button>
            </Link>
            <Link to='/games' className='react-link link-games' onClick={toggleMenu}>
                <span className='btn-behind games-behind'></span>
                <button type="button" className='games-btn'>GAMES</button>
            </Link>
            <Link to='/about' className='react-link link-about' onClick={toggleMenu}>
                <span className='btn-behind about-behind'></span>
                <button type="button" className='about-btn'>ABOUT</button>
            </Link>
            <Link to='/resume' className='react-link link-resume' onClick={toggleMenu}>
                <span className='btn-behind resume-behind'></span>
                <button type="button" className='resume-btn'>RESUME</button>
            </Link>
            <Link to='/contact' className='react-link link-contact' onClick={toggleMenu}>
                <span className='btn-behind contact-behind'></span>
                <button type="button" className='contact-btn'>CONTACT</button>
            </Link>
        </nav>
    )
};

export default Navbar;