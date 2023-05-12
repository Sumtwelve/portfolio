import React from "react";
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    return (
        <button
            type='button'
            className='back-btn'
            onClick={() => navigate("/")}>
                &larr; Go Back
        </button>
    );
};

export default BackBtn;