import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./PortNavFoot.css";
import { useFormData } from "../context/FormContext";

function TempTwoHeader() {
    let { state } = useFormData();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="portNavigation">
                <NavLink to="/buildportfolio/edu/wordhistory/summary/skills/projects/services/portfolioTwo">
                    <h1 className="PortfolioName">{state.firstName} {state.lastName}</h1>
                </NavLink>

                <i
                    id="menu"
                    className="menu ri-menu-3-line"
                    onClick={toggleMenu} 
                ></i>

                <div className={`portLinks ${menuOpen ? "show" : ""}`}>
                    <NavLink to="/buildportfolio/edu/wordhistory/summary/skills/projects/services/templates/portfolioTwo">
                        Home
                    </NavLink>
                    <hr />
                    <NavLink className={(e) => (e.isActive ? "color" : "")} to="PortTwoabout">
                        About us
                    </NavLink>
                    <hr />
                    <NavLink className={(e) => (e.isActive ? "color" : "")} to="PortTworesume">
                        Resume
                    </NavLink>
                    <hr />
                    <NavLink className={(e) => (e.isActive ? "color" : "")} to="PortTwoservices">
                        Services
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default TempTwoHeader;
