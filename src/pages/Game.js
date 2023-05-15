import React from 'react';
import { useParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';

const Game = () => {

    const { gameId } = useParams();

    return (
        <main>
            <h2>Game: {gameId}</h2>
            <BackBtn />
        </main>
    )
};

export default Game;