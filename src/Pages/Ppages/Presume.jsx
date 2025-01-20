import React from "react";
import "./Presume.css";
import { useFormData } from "../../context/FormContext";

function Presume() {
  let { state } = useFormData();
  return (
    <>
      <div className="resume">
        <div className="resumeHero">
          <h1 id="resumeHeading">Resume</h1>
          <p id="SkillText">Your Skills, Experience, and Potential in One Resume</p>
        </div>

        <div className="eduExp">
          <div id="educationSection">
            <h2 className="head2">My Education</h2>
            <div className="degreeCard">
              <div id="degreeIconDev">
                <i className="DegreeIcon ri-graduation-cap-line"></i>
              </div>
              <div id="degreeCardText">
                <h2 id="coldegreeShow">{state.coldegree}</h2>
                <p className="degreeP">
                  {state.colName} <span>( {state.colloc} )</span>
                </p>
                <p className="degreeP">
                  From {state.colstart} - {state.colend}
                </p>
                <p className="degreeP">{state.colDescription}</p>
              </div>
            </div>
            <div className="degreeCard">
              <div id="degreeIconDev">
                <i className="DegreeIcon ri-graduation-cap-line"></i>
              </div>
              <div id="degreeCardText">
                <h2 id="coldegreeShow">{state.UniversityDegree}</h2>
                <p className="degreeP">
                  {state.UniversityName} <span>( {state.UniversityLocation} )</span>
                </p>
                <p className="degreeP">
                  From {state.UniversityStateDate} - {state.UniversityEndDate}
                </p>
                <p className="degreeP">{state.UniversityDescription}</p>
              </div>
            </div>
            <div className="degreeCard">
              <div id="degreeIconDev">
                <i className="DegreeIcon ri-graduation-cap-line"></i>
              </div>
              <div id="degreeCardText">
                <h2 id="coldegreeShow">{state.degree}</h2>
                <p className="degreeP">
                  {state.schoolName} <span>( {state.loc} )</span>
                </p>
                <p className="degreeP">
                  From {state.schoolstart} - {state.schoolend}
                </p>
                <p className="degreeP">{state.schoolDescription}</p>
              </div>
            </div>
          </div>

          <div id="ExperiencePart">
            <h2 className="head2">Experience</h2>
            <div className="degreeCard experienceCard">
              <div id="degreeIconDev">
                <i class="DegreeIcon ri-suitcase-line"></i>
              </div>
              <div id="degreeCardText">
                <h2 id="coldegreeShow">{state.SecjobTitle}</h2>
                <p className="degreeP">
                  Organization : {state.Jobcompany} <br />
                  <span>
                     located in {state.SecjobCity} {state.SecjobCountry} 
                  </span>
                </p>
                <p className="degreeP">
                  From {state.SecjobStartDate} - {state.SecjobEndDate}
                </p>
                <p className="degreeP">{state.SecjobDescription}</p>
              </div>
            </div>
            <div className="degreeCard">
              <div  id="degreeIconDev">
                <i class="DegreeIcon ri-suitcase-line"></i>
              </div>
              <div id="degreeCardText">
                <h2 id="coldegreeShow">{state.jobTitle}</h2>
                <p className="degreeP">
                Organization : {state.SecJobcompany}
                <br />
                  <span className="degreeP">
                     located in {state.jobCity} {state.jobCountry} 
                  </span>
                </p>
                <p className="degreeP">
                  From {state.jobStartDate} - {state.jobEndDate}
                </p>
                <p className="degreeP">{state.jobDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presume;
