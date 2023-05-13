import React from "react";
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    return (
        <button
            type='button'
            className='back-btn'
            onClick={() => navigate("/")}>
                🏠 Home
        </button>
    );
};

export default BackBtn;