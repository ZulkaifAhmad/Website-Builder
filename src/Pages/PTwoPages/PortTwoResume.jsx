import React from "react";
import "./PortFolioTwo.css";
import { useFormData } from "../../context/FormContext";

function PortTwoResume() {
  let {state} = useFormData();
  return (
    <div className="PortTwoResume">

      <h1 id="PTwoAboutMeHeading">Resume</h1>
      <p id="KnowMore">Everything You Need to Know Is Right Here</p>
      <div className="line"></div>

      <div className="Education_Experience">

        <div className="PortTwoEducation sameExpEdu">
          <div className="EducationUpper expEdu">
            <i id="eduIcon" class="ri-graduation-cap-line"></i>
            <h2>Education</h2>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <p className="sameSize">{state.colstart} - {state.colend}</p>
            <strong className="sameSize">{state.colName}</strong>
            <p className="uniLocation sameSize">Location : {state.colloc}</p>
            <p className="sameSize">Degree : {state.coldegree}</p>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <p className="sameSize">{state.UniversityStateDate} - {state.UniversityEndDate}</p>
            <strong className="sameSize">{state.UniversityName}</strong>
            <p className="uniLocation sameSize">Location : {state.UniversityLocation}</p>
            <p className="sameSize">Degree : {state.UniversityDegree}</p>
          </div>
        </div>

        
        <div className="PortTwoExperience sameExpEdu">
          <div className="ExperienceUpper expEdu">
          <i id="eduIcon" class="ri-briefcase-line"></i>
          <h2>Experience</h2>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <p className="sameSize">{state.jobStartDate} - {state.jobEndDate}</p>
            <strong className="sameSize">{state.jobTitle} ({state.Jobcompany})</strong>
            <p className="uniLocation sameSize">Location : {state.jobCity} , {state.jobCountry}</p>
            <p className="sameSize">{state.jobDescription}</p>
          </div>
          <div className="lineTwo"></div>
          <div className="educationCart">
            <p className="sameSize">{state.SecjobStartDate} - {state.SecjobEndDate}</p>
            <strong className="sameSize">{state.SecjobTitle} ({state.SecJobcompany})</strong>
            <p className="uniLocation sameSize">Location : {state.SecjobCity} , {state.SecjobCountry}</p>
            <p className="sameSize">{state.SecjobDescription}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default PortTwoResume;
