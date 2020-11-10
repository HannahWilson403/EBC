import React from 'react';
import './Header.css';
import logo from './Extreme Bike Club Logo.png';

function Header() {
    return (
        <div className="Header">
            <header>
            <h1>EBC</h1>
            <h3>Extreme Bike Club</h3>
            </header>
            <img scr={logo} alt="Logo"/>;
        </div>
    )
}

export default Header;