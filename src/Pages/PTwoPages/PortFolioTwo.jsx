import React from 'react'
import { useFormData } from '../../context/FormContext'
import './PortFolioTwo.css'

function PortFolioTwo() {
  let {state} = useFormData();
  return (
    <>
        <div className="PortFolioTwo">
          <img id='PortTwoImg' src="/templateTwoImage.jpg" alt="" />
          <div className="PortFolioTwoTextPart">
            <p id='hello'>Hello</p>
            <h1 id='myName'>I'm {state.firstName} {state.lastName}</h1>
            <p id='introTwo'>A Freelancer {state.MainSkill}</p>
            <button id='PortTwoButton'>Get Started</button>
          </div>
        </div>
    </>
  )
}

export default PortFolioTwo