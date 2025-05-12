import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">EduSite</Link>
            </div>

            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/courses " onClick={closeMenu}>Courses</Link>
                <Link to="/about " onClick={closeMenu}>About</Link>
                <Link to="/contact " onClick={closeMenu}>Contact</Link>
            </div>

            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
