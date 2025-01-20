import React from 'react'
import './Presume'
import { useFormData } from '../../context/FormContext'

function Pservices() {
  let {state} = useFormData();
  return (
    <>
      <div className="Pservices">
        <div className="Pserhero">
          <h1>Skills , Services & Project</h1>
          <p>"Personalized Support, Professional Results"</p>
        </div>
        <div className="ServicesCards">
          <div className="ServicesSection sameServiceCards">
            <h2 id='ServicesHeading'>Service</h2>
          <div className="servCard servicefirstCard">
            <div className="servIcon">
            <i class="ri-global-line"></i>
            </div>
          <h2 id='serviceName'>{state.serviceName}</h2>
          <p className='serviceDetail'>Category : {state.category}</p>
          <p className='serviceDetail'>Service Duration : {state.serviceDuration}</p>
          <p className='serviceDetail'>Pricing : {state.pricing}</p>
          </div>
          </div>
          <div className="skillSection sameServiceCards">
            <h2 id='SkillHeading'>Skills</h2>
          <div className="combineSkillCards">
          <div className="servCard">
          <i class="SkillIcon ri-mac-fill"></i>
          <h2>{state.skillOne}</h2>
          <p>{state.skillOneLevel}</p>
          </div>
          <div className="servCard">
          <i class="SkillIcon ri-mac-fill"></i>
          <h2>{state.skillTwo}</h2>
          <p>{state.skillTwoLevel}</p>
          </div>
          <div className="servCard">
          <i class="SkillIcon ri-mac-fill"></i>
          <h2>{state.skillThree}</h2>
          <p>{state.skillThreeLevel}</p>
          </div>
          </div>
          </div>
          <div className="projectSection sameServiceCards">
            <h2 id='ProjectHeading'>Recent - Project</h2>
            <div className="servCard servicefirstCard">
            <i class="ProjectIcon ri-reactjs-line"></i>
          <h2 id='ProjectName'>{state.projectName}</h2>
          <p>Client Name : {state.clientName}</p>
          <p>Category : {state.projectCategory}</p>
          <p>Deadline : {state.projectDeadline}</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pservices