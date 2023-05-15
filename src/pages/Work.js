/**
 * Whereas Webdev.js showcases all my apps/projects, Work.js will showcase only one,
 * and it does so when the user clicks on an app on the Webdev page
 */

import React from 'react';
import { useParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn';
const devData = require('../data/devWorks.json');

// PATH: /dev/:workId

const Work = () => {

    const { workId } = useParams();
    const data = devData[workId];

    return (
        <main>
            <h2>{data.title}</h2>

            <BackBtn />
        </main>
    )
};

export default Work;