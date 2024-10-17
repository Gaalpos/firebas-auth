import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/" onClick={() => setIsOpen(false)} className='navItem'>Inicio</Link></li>
                <li><Link to="/signup" onClick={() => setIsOpen(false)} className='navItem'>Signup</Link></li>
                <li><Link to="/login" onClick={() => setIsOpen(false)} className='navItem'>Login</Link></li>
            </ul>


            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>


    );
}

export default Navbar;
