import React, { useState } from 'react';
import './Navigation.css';
import './LayoutResponsive.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const [isNavVisible, setIsNavVisible] = useState(false); // Default is hidden for smaller screens

    function toggleNav() {
        setIsNavVisible(prev => !prev);  
    }

    return (
        <>
            <nav className="flex">
                <div className="navHeading flex">
                    <img src="/Logo.png" alt="Logo" />
                    <NavLink to="/">
                        <h1>Portfolio Builder</h1>
                    </NavLink>
                </div>
                {/* Menu icon for toggling */}
                <button 
                    id="menu" 
                    onClick={toggleNav} 
                    className="ri-menu-line" 
                    aria-label="Toggle navigation"
                ></button>
                
                {/* Navigation links */}
                <div 
                    className={`navLinks ${isNavVisible ? 'visible' : 'hidden'}`}
                >
                    <NavLink className={(e) => e.isActive ? "color" : ""} to="/">Home</NavLink>
                    <NavLink className={(e) => e.isActive ? "color" : ""} to="/about">About us</NavLink>
                    <NavLink className={(e) => e.isActive ? "color" : ""} to="/contact">Contact us</NavLink>
                    <NavLink className={(e) => e.isActive ? "color" : ""} to="/privacypolicy">Privacy Policy</NavLink>
                    <NavLink className={(e) => e.isActive ? "color" : ""} to="/buildportfolio">Build Portfolio</NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
