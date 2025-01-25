import React from 'react'
import './PortfolioThree.css'
import { useFormData } from '../../context/FormContext'

function PortfolioThreeAbout() {
  let {state} = useFormData();
  return (
    <div className="PortfolioThreeAbout">
      <div className="ThreeUpper">
      <div className="threeLine"></div>
      <h1>About us</h1>
      <div className="threeLine"></div>
      </div>
      <div className="ThreeAboutText">
        <div className="threeText">
          <h1 id="whyHire">Why Should You Hire me ?</h1>
          <p id="threeAboutIntro">{state.Summary}</p>

          <ul id="unOrderList">
            <li className="ThreeLi">In-depth Industry Experience</li>
            <li className="ThreeLi">Organized Design Process</li>
            <li className="ThreeLi">Expert in Web Technologies</li>
            <li className="ThreeLi">Always Meet Dealines</li>
          </ul>

        </div>
        <div className="threeImg">
          <img src="/ThreePic.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PortfolioThreeAbout