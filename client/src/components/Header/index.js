import React from "react";

const Header = () => {
    const onHomepage = window.location.pathname === '/';
    return (
        <div className="header">
            <a href="..">
                <h1>SUMTWELVE</h1>
            </a>
            <div className="banner-wrapper"></div>
            <img className={`${onHomepage ? "avatar-img-top-home " : ""}avatar-img`} src="./images/avatar-circle.png" alt="A simple icon representing the artist Sumtwelve."></img>
        </div>
    );
};

export default Header;