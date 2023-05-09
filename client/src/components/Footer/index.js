import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = ({ currentPath }) => {
    return (
        <nav className={`bottom-bar${currentPath === "/" ? " bottom-bar-home" : ""}`}>
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

export default BottomNav;