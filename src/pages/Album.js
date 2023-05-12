import React from 'react';
import { useParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn';

const Album = () => {

    const { albumId } = useParams();

    return (
        <main>
            <h2>One album: </h2>
            <BackBtn />
        </main>
    )
};

export default Album;