/**
 * Whereas Webdev.js showcases all my apps/projects, Work.js will showcase only one,
 * and it does so when the user clicks on an app on the Webdev page
 */

import React from 'react';
import { useParams } from 'react-router-dom'
const devData = require('../data/devWorks.json');

const Work = () => {

    const { devWorkId } = useParams();

    const song = Object.keys(devData)[devWorkId] || "SONG NOT FOUND";

    return (
        <main>
            {song}
            <h2>One song: {devData.woah.title}</h2>
        </main>
    )
};

export default Work;