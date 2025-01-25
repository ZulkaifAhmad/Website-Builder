import React,{useEffect, useState} from 'react'
import './PortfolioThree.css'
import SmallCard from './SmallCard';
import { useFormData } from '../../context/FormContext'


function PortfolioThreeResume() {
  let {state} = useFormData();
  let style = {
    backgroundColor : "blue",
    color : "white"
  }
  let [active , setActive] = useState("About");
  useEffect(()=>{
    console.log(active)
  },[active])
  return (
    <div className='PortfolioThreeResume'>
      <div className="ThreeUpper">
      <div className="threeLine"></div>
      <h1>Resume</h1>
      <div className="threeLine"></div>
      </div>
      <div className="allButton">
        <button style={active === "About" ? style : {}} onClick={()=> setActive("About")} className='allButtons' id='AboutMe'>About Me<i class="ri-arrow-right-up-line upLine"></i></button>
        <button style={active === "Experience" ? style : {}} onClick={()=> setActive("Experience")} className='allButtons' id='Experience'>Experience<i class="ri-arrow-right-up-line upLine"></i></button>
        <button style={active === "Skills" ? style : {}} onClick={()=>setActive("Skills")} className='allButtons' id='Skills'>Skills<i class="ri-arrow-right-up-line upLine"></i></button>
        <button style={active === "Education" ? style : {}} onClick={()=> setActive("Education")} className='allButtons' id='Education'>Education<i class="ri-arrow-right-up-line upLine"></i></button>
      </div>

      {
        active === "About" && (
          <div className="ResumeAbout">
            <div className="ThreeResumeImage">
              <img src="/public/ThreePic.jpg" alt="img" />
            </div>
            <div className="ThreeResumeText">
              <h1 id='baisedPak'>Based In {state.nationality}</h1>
              <p id='threeResumeIntro'>{state.Summary}</p>
              <table id='threeTable'>
                <tr className='TableRow'>
                  <td className='threeTd'>Name</td> <td className='threeTdTwo'>{state.firstName} {state.lastName}</td>
                </tr>
                <tr className='TableRow'>
                  <td className='threeTd'>Nationality</td> <td className='threeTdTwo'>{state.nationality}</td>
                </tr>
                <tr className='TableRow'>
                  <td className='threeTd'>Phone</td> <td className='threeTdTwo'>{state.phoneNumber}</td>
                </tr>
                <tr className='TableRow'>
                  <td className='threeTd'>Email</td> <td className='threeTdTwo'>{state.email}</td>
                </tr>
              </table>
            </div>
          </div>
        )
      }
      {
        active === "Experience" && (
          <div className="ResumeAbout">
            <div className="ThreeResumeImage">
              <img src="/public/ThreePic.jpg" alt="img" />
            </div>
            <div className="ThreeResumeText ThreeexperienceTextPart">
              <SmallCard date={state.jobStartDate} companyName={state.Jobcompany} title={state.jobTitle}/>
              <SmallCard date={state.SecjobStartDate} companyName={state.SecJobcompany} title={state.SecjobTitle}/>
            </div>
          </div>
        )
      }
      {
        active === "Skills" && (
          <div className="ThreeSkills">
            <div className="ThreeResumeImage">
              <img src="/public/ThreePic.jpg" alt="img" />
            </div>
            <div className='threeSkillApart'>
              <div className="threeSkillSmallCard">
              <i class="ri-reactjs-fill threeskill"></i>
              <div className="subApart">
                <strong>{state.skillOne}</strong>
                <p>Level : {state.skillOneLevel}</p>
              </div>
              </div>
              <div className="threeSkillSmallCard">
              <i class="ri-reactjs-fill threeskill"></i>
              <div className="subApart">
                <strong>{state.skillTwo}</strong>
                <p>Level : {state.skillTwoLevel}</p>
              </div>
              </div>
              <div className="threeSkillSmallCard">
              <i class="ri-reactjs-fill threeskill"></i>
              <div className="subApart">
                <strong>{state.skillThree}</strong>
                <p>Level : {state.skillThreeLevel}</p>
              </div>
              </div>
            </div>
          </div>
        )
      }
      {
        active === "Education" && (
          <div className="ThreeEducation">
            <div className="ThreeResumeImage">
              <img src="/public/ThreePic.jpg" alt="img" />
            </div>
            <div className="ThreeEducationCards">
              <div className="ThreeEducationCard">
              <p className='SameP'>{state.schoolstart} - {state.schoolend}</p>
              <h2>{state.degree}</h2>
              <p className='SameP'>({state.schoolName})</p>
              </div>
              <div className="ThreeEducationCard">
              <p className='SameP'>{state.colstart} - {state.colend}</p>
              <h2>{state.coldegree}</h2>
              <p className='SameP'>({state.colName})</p>
              </div>
              <div className="ThreeEducationCard">
              <p className='SameP'>{state.UniversityStateDate} - {state.UniversityEndDate}</p>
              <h2>{state.UniversityDegree}</h2>
              <p className='SameP'>({state.UniversityName})</p>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default PortfolioThreeResume