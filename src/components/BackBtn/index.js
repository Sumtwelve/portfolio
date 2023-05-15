import React from "react";
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    return (
        <>
            <button
                type='button'
                className='back-btn'
                onClick={() => navigate(-1)}>
                    <span style={{ marginRight: '10px' }}>&larr;</span> Go Back
            </button>
            <button
                type='button'
                className='home-btn'
                onClick={() => navigate("/")}>
                    🏠 Home
            </button>
        </>
    );
};

export default BackBtn;