import React from 'react'
import { useFormData } from '../../context/FormContext'

function PAboutus() {
  let {state} = useFormData();
  return (
    <>
      <div className="Paboutus">
        <img src="/User Pic.jpg" alt="" />
        <div className="PaboutText">
          <div>
          <h1 id='PaboutTextHeading'>About Me</h1>
          <p id='discover'>Discover More About Me</p>
          </div>
          <div id='PaboutSummaryDiv'>
            <p id='PaboutSummary'>{state.Summary}</p>
          </div>
          
          <table id='PaboutTable'>
            <tr>
              <td className="tableData">Name</td>
              <td className='lastTd'>{state.firstName} {state.lastName}</td>
            </tr>
            <tr>
              <td className="tableData">Address</td>
              <td className='lastTd'>{state.address}</td>
            </tr>
            <tr>
              <td className="tableData">Email</td>
              <td className='lastTd'>{state.email}</td>
            </tr>
            <tr>
              <td className="tableData">Phone Number</td>
              <td className='lastTd'>{state.phoneNumber}</td>
            </tr>
            <tr>
              <td className="tableData">Date of Birth</td>
              <td>{state.dateOfBirth}</td>
            </tr>
            <tr>
              <td className="tableData">Nationality</td>
              <td>{state.nationality}</td>
            </tr>
            <tr>
              <td className="tableData">ZIP Code</td>
              <td className='lastTd'>{state.zipCode}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default PAboutus