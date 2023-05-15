import React from 'react';
import { Link } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import BackBtn from '../components/BackBtn';

// import dev database
const devData = require('../data/devWorks.json');
const devDataKeys = Object.keys(devData);

const Webdev = () => {

    document.title = "Web Developer // Sumtwelve";

    return (
        <main className='subpage-main webdev-main'>
            <h2>Web Developer Portfolio</h2>
            <p>
                I've been involved in web development for about a year now. I think the web
                is a fantastic place to host and run applications. Check out
                the <Link to="/resume">Resume</Link> page for more info on my education
                and skills in this field.
            </p>
            <section className='works-section'>
                <h3>WORKS</h3>
                {devDataKeys.map((key) => {
                    return <WorkCard devData={devData[key]} key={devData[key].id} />
                })}
            </section>

            <BackBtn />
        </main>
    )
};

export default Webdev;