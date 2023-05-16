import React from 'react';
import { useParams } from 'react-router-dom'
const songData = require('../db/songs.json');

const Song = () => {

    const { songId } = useParams();

    const song = Object.keys(songData)[songId] || "SONG NOT FOUND";

    return (
        <main>
            {song}
            <h2>One song: {songData.woah.title}</h2>
        </main>
    )
};

export default Song;