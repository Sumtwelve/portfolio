/**
 * Whereas Webdev.js showcases all my apps/projects, Work.js will showcase only one,
 * and it does so when the user clicks on an app on the Webdev page
 */

import React from 'react';
import { useParams } from 'react-router-dom'
const devData = require('../data/devWorks.json');

// PATH: /dev/:workId

const Work = () => {

    const { workId } = useParams();

    return (
        <main>
            <h2>One song:</h2>
        </main>
    )
};

export default Work;