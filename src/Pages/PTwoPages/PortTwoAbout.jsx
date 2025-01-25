import React from 'react'
import './PortFolioTwo.css'
import { useFormData } from '../../context/FormContext'

function PortTwoAbout() {
  let {state} = useFormData();
  return (
    <div className='PortTwoAbout'>
      <h1 id='PTwoAboutMeHeading'>About me</h1>
      <p id='KnowMore'>Know More Who I am ?</p>
      <div className="line"></div>

      <div className="PortTwoAboutTextPart">
        <img id='PortTwoImg' src="/templateTwoImage.jpg" alt="" />
        <div className="PortTwoText">
          <h1 id='myNameAbout'>Hello, I'm {state.firstName} {state.lastName}</h1>
          <p id='introductionToMe'>{state.Summary}</p>

          <table>
            <tr>
              <td className='TableFirstData'>Residence</td>    <td className='TableSecondData'>{state.nationality}</td>
            </tr>
            <tr>
              <td className='TableFirstData'>Address</td>    <td className='TableSecondData'>{state.address}</td>
            </tr>
            <tr>
              <td className='TableFirstData'>Email</td>    <td className='TableSecondData'>{state.email}</td>
            </tr>
            <tr>
              <td className='TableFirstData'>Phone Number</td>    <td className='TableSecondData'>{state.phoneNumber}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PortTwoAbout