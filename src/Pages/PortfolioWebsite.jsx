import React from 'react'
import './PortfolioWebsite.css'
// import { NavLink } from 'react-router-dom'
import { useFormData } from '../context/FormContext';

function PortfolioWebsite() {
  let {state} = useFormData()
  
    
  return (
    <>
        <div className="PortfolioWebsite">
          <div className="portHeroSection">
            <img src="/User Pic.jpg" alt="" />
            <div className="portHeroText">
              <p id='passion'>{state.MainSkill}</p>
              <h1 id='myName'>{state.firstName} {state.lastName}</h1>
              <p id='Pintro'>{state.Summary}</p>
              {/* <button onClick={getter}>Get Started</button> */}
            </div>
          </div>
          <div className="Pfoot flex gap">
          <a target='_blank' href="https://web.facebook.com/profile.php?id=100094954789507">Facebook</a>
          <a target='_blank' href="https://www.linkedin.com/in/zulkaif-ahmad-28a0512b7/">LinkdIn</a>
          </div>
        </div>
    </>
  )
}

export default PortfolioWebsite