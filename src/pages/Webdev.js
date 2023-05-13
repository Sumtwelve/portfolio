import React from 'react';
import { Link } from 'react-router-dom';
import BackBtn from '../components/BackBtn';

const Webdev = () => {
    return (
        <main className='subpage-main webdev-main'>
            <h2>Web Developer Portfolio</h2>
            <p>
                I've been interested in web development for about a year now. I think the web
                is a fantastic place to host and run applications. Check out
                the <Link to="/resume">Resume</Link> page for more info on my education
                in this field.
            </p>
            <section className='works-section'>
                <h3>WORKS</h3>
            </section>

            <BackBtn />
        </main>
    )
};

export default Webdev;