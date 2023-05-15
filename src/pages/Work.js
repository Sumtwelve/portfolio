/**
 * Whereas Webdev.js showcases all my apps/projects, Work.js will showcase only one,
 * and it does so when the user clicks on an app on the Webdev page.
 * 
 * !! NOTE !!
 * This page is not currently being used in the official release!
 * I decided that Web Dev subpages crowded up the UI a little too much.
 * They're unnecessary, in other words. So I won't use them now.
 * If I ever find a real need for them, it will be a lot easier to
 * re-implement if I just leave them here.
 */

import React from 'react';
import { useParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn';
import NotFound from '../pages/NotFound';
const devData = require('../data/devWorks.json');

// PATH: /dev/:workId

const Work = () => {

    const { workId } = useParams();
    const data = devData[workId];

    // if param doesn't match an entry in the db
    if (!data) {
        return <NotFound />
    }

    return (
        <main>
            <h2 className='webdev-sub'>{data.title}</h2>
            <p>{data.descriptionLong}</p>
            <BackBtn />
        </main>
    )
};

export default Work;