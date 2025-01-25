import React from 'react'
import { useFormData } from '../../context/FormContext'


function PortfolioThreeServices() {
  let {state} = useFormData();
  return (
    <div id='PortfolioThreeServices'>
      <div className="ThreeUpper">
      <div className="threeLine"></div>
      <h1>Services</h1>
      <div className="threeLine"></div>
      </div>

      <div className="threeServiceCard">
        <div className="ThreeCard">
        <i class="ri-ie-fill spark"></i>
        <div className="combineThree">
          <p id='serviceNameThree'>{state.serviceName}</p>
          <i class="ri-arrow-right-up-line arrow"></i>
        </div>
        <div className="ThreeP">
        <p className='ThreeServiceP'>Category : {state.category}</p>
        <p className='ThreeServiceP'>Duration : {state.serviceDuration}</p>
        <p className='ThreeServiceP'>Pricing :  {state.pricing}</p>
        </div>
        </div>
        <div className="ThreeCard">
        <i class="ri-android-line spark"></i>
        <div className="combineThree">
          <p id='serviceNameThree'>App Development</p>
          <i class="ri-arrow-right-up-line arrow"></i>
        </div>
        <div className="ThreeP">
        <p className='ThreeServiceP'>Category : Development</p>
        <p className='ThreeServiceP'>Duration : 2 Weeks</p>
        <p className='ThreeServiceP'>Pricing :  Paid</p>
        </div>
        </div>
        <div className="ThreeCard">
        <i class="ri-ie-fill spark"></i>
        <div className="combineThree">
          <p id='serviceNameThree'>Website Development</p>
          <i class="ri-arrow-right-up-line arrow"></i>
        </div>
        <div className="ThreeP">
        <p className='ThreeServiceP'>Category : Desiging</p>
        <p className='ThreeServiceP'>Duration : 2 Weeks</p>
        <p className='ThreeServiceP'>Pricing :  Paid</p>
        </div>
        </div>
      </div>
      </div>
  )
}

export default PortfolioThreeServices