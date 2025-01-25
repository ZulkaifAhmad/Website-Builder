import React from 'react'
import './PortfolioThree.css'
import { useFormData } from '../../context/FormContext'

function PortfolioThree() {
  let {state} = useFormData();
  return (
    <>
    <div className='PortfolioThree'>
        <h1 id='ThreeName'>I'm {state.firstName} {state.lastName}</h1>
        <h1 id='ThreeMainSkill'>{state.MainSkill}</h1>
        <p id='ThreeIntro'>{state.Summary}</p>
        <button id='Threebtn'>Get Started</button>
    </div>
    <img id='Womens' src="/Womens.jpg" alt="" />
    </>
  )
}

export default PortfolioThree