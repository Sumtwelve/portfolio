import React from 'react';
import BackBtn from '../components/BackBtn';

const NotFound = () => {

    document.title = "404 Not Found // Sumtwelve"

    return (
        <main className='notfound-main'>
            <h2>404: Not found</h2>
            <h3>That URL is pointing to something that don't exist, partner.</h3>
            <BackBtn />
        </main>
    )
};

export default NotFound;