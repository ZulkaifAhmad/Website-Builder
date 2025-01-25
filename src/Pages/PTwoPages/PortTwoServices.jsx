import React from "react";
import { useFormData } from "../../context/FormContext";

function PortTwoServices() {
  let {state} = useFormData();
  return (
    <div className="PortTwoServices">
      <h1 id="PTwoAboutMeHeading">Services & Skills</h1>
      <p id="KnowMore">Expert Services , just for you</p>
      <div className="line"></div>

      <div className="Education_Experience">
        <div className="PortTwoEducation sameExpEdu">
          <div className="EducationUpper expEdu">
          <i class="lastIcon ri-reactjs-line"></i>
            <h2>Services</h2>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <strong className="sameSize bigService">
              {state.serviceName}
            </strong>
            <p className="sameSize">Duration : {state.serviceDuration}</p>
            <p className="uniLocation sameSize">Category : {state.category}</p>
            <p className="sameSize">Pricing : {state.pricing}</p>
          </div>
        </div>
        <div className="PortTwoExperience sameExpEdu">
          <div className="ExperienceUpper expEdu">
            <i class="lastIcon ri-briefcase-line"></i>
            <h2>Skills</h2>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <strong className="sameSize bigSkill">
              {state.skillOne}
            </strong>
            <p className="uniLocation sameSize">Level : {state.skillOneLevel}</p>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <strong className="sameSize bigSkill">
              {state.skillTwo}
            </strong>
            <p className="sameSize">Level : {state.skillTwoLevel}</p>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <strong className="sameSize bigSkill">
              {state.skillThree}
            </strong>
            <p className="sameSize">Level : {state.skillThreeLevel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortTwoServices;
