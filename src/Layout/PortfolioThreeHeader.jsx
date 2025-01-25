import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./PortNavFoot.css";
import { useFormData } from "../context/FormContext";

function PortfolioThreeHeader() {
  const { state } = useFormData();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const location = useLocation();
  const isHome = location.pathname === "/buildportfolio/edu/wordhistory/summary/skills/projects/services/templates/portfolioThree";

  return (
    <div className="portNavigation">
      <NavLink to="/buildportfolio/edu/wordhistory/summary/skills/projects/services/templates/portfolioThree">
        <h1 className={`PortfolioName ${isHome ? "home" : "other"}`}>
          Zulkaif Ahmad
        </h1>
      </NavLink>

      <i
        id="menu"
        className="menu ri-menu-3-line"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
      ></i>

      <div className={`portLinks ${menuOpen ? "show" : ""}`}>
        <NavLink
          className={isHome ? "home" : "other"}
          onClick={() => setMenuOpen(false)}
          to="/buildportfolio/edu/wordhistory/summary/skills/projects/services/templates/portfolioThree"
        >
          Home
        </NavLink>
        <hr />
        <NavLink
          className={isHome ? "home" : "other"}
          onClick={() => setMenuOpen(false)}
          to="PortThreeAbout"
        >
          About Us
        </NavLink>
        <hr />
        <NavLink
          className={isHome ? "home" : "other"}
          onClick={() => setMenuOpen(false)}
          to="PortThreeResume"
        >
          Resume
        </NavLink>
        <hr />
        <NavLink
          className={isHome ? "home" : "other"}
          onClick={() => setMenuOpen(false)}
          to="PortThreeServices"
        >
          Services
        </NavLink>
      </div>
    </div>
  );
}

export default PortfolioThreeHeader;
