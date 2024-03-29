import React from 'react';
import { Link } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import BackBtn from '../components/BackBtn';

// import dev database
const data = require('../db/devWorks.json');
const devDataKeys = Object.keys(data);

const Webdev = () => {

    document.title = "Web Developer // Sumtwelve";

    return (
        <main className='subpage-main webdev-main'>
            <h2>Web Developer Portfolio</h2>
            <p>
                I've been involved in web development for about a year now. I think the web
                is a fantastic place to host and run applications. Here's a list of some apps
                I've made! Also be sure to check out the <Link to="/resume">Resume</Link> page
                for more info on my education and skills in this field.
            </p>
            <p>
                Click a project's "VISIT" button (if it has one) to visit the deployed app,
                or click on the GitHub logo to view the project repository.
            </p>
            <section className='works-section'>
                <h3>WORKS</h3>
                {devDataKeys.map((key) => {
                    return <WorkCard key={data[key].id} data={data[key]} />
                })}
            </section>

            <BackBtn />
        </main>
    )
};

export default Webdev;