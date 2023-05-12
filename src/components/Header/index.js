import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const onHomepage = location.pathname === '/';
    return (
        <div className="header">
            <h1 onClick={() => navigate('/')}>SUMTWELVE</h1>
            <div className="banner-wrapper"></div>
            <img className={`${onHomepage ? "avatar-img-top-home " : ""}avatar-img`}
                 src="images/avatar-circle.png"
                 alt="A simple icon representing the artist Sumtwelve."
            />
            <span className="hello">hi :)</span>
        </div>
    );
};

export default Header;