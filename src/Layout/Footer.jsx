import React from 'react'
import { NavLink } from 'react-router-dom'
import './LayoutResponsive.css'

function Footer() {
return (
<>
  <footer>
    <div className="footUpper">
      <div className="navHeading flex">
        <img src="/Logo.png" alt="" />
        <h1>Portfolio Builder</h1>
      </div>
      <div className="footIcons flex">
        <a target='_blank' href="https://web.facebook.com/profile.php?id=100094954789507">
        <i class="ri-facebook-fill flex"></i>
        </a>
        <a target='_blank' href="https://www.linkedin.com/in/zulkaif-ahmad-28a0512b7/">
        <i class="ri-linkedin-fill flex"></i>
        </a>
      </div>
    </div>
    
    <div className="footLower">
      <div className="footIntro">
        <h1>About us</h1>
        <p><strong>Portfolio Builder</strong>, your go-to solution for creating a standout online portfolio. We’re passionate about helping individuals and businesses showcase their work in the best possible light. Whether you’re an artist, designer, or professional, our tailored portfolio solutions are designed to highlight your unique skills and achievements.</p>
      </div>
      <div className="footSupport flex">
        <h1>Support</h1>
        <NavLink to='/about'>About us</NavLink>
        <NavLink to='/contact'>Contact us</NavLink>
        <NavLink to='/privacypolicy'>Privacy Policy</NavLink>
      </div>
      <div className="footSupport flex footServ">
        <h1>Services</h1>
        <NavLink to='/'>Website Design</NavLink>
        <NavLink to='/contact'>App Design</NavLink>
        <NavLink to='/'>UI/UX Design</NavLink>
      </div>
    </div>
  </footer>
</>
)
}

export default Footer