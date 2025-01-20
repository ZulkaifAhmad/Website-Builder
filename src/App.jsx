import React from "react";
import "./components/App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <div className="heroSection">
          <div className="heroText">
            <h1>
              Create a <br /> Portfolio Website
            </h1>
            <p>
              Showcase your work online with a portfolio website. Get Started
              with a professionally designed template that can be customized to
              build your portfolio.
            </p>
            <NavLink to="/buildportfolio">
            <button>
              Get Started
              <i class="ri-arrow-right-line"></i>
            </button>
            </NavLink>
          </div>
          <div className="heroImage">
            <img src="heroImg.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
