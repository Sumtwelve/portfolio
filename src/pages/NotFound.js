import React from 'react';
import BackBtn from '../components/BackBtn';

const NotFound = () => {

    document.title = "404 Not Found // Sumtwelve"

    return (
        <main className='404-main'>
            <h2>NotFound</h2>
            <BackBtn />
        </main>
    )
};

export default NotFound;