import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./BuildPortfolio2.css";
import { useFormData } from "../context/FormContext";

function Skills() {
      let Navigate = useNavigate()
      let { register, handleSubmit } = useFormData()
      function onSubmit (data) {
        console.log(data)
        Navigate("/buildportfolio/edu/wordhistory/summary/skills/projects")
      }
  return (
    <>
      <div className="skills">
        <h1 id="pageNumber">BasicDetail/Education/Work/Summary/Skills</h1>
        <div className="workheading">
          <h1 className='workHeading'>What skills would you like to highlight?</h1>
          <p id='workP'>Write your own skills below.</p>
            {/* <p id="blue">Adding One Skill Is Necessary !</p> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="skillsInputs">
            <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="SkillLevel">What are you ?</label>
              <select className="inputFeild" id="SkillLevel" {...register("MainSkill")}>
                <option>Select Skill</option>
                <option>Website Developer</option>
                <option>App Developer</option>
                <option>Ethical Hacker</option>
                <option>Data Scientist</option>
                <option>Data Analyist</option>
              </select>
            </div>
            </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="Skill1">Skill Name</label>
              <input
                type="text"
                className="skillInput inputFeild"
                id="Skill1"
                placeholder="e.g Web Design"
                {...register("skillOne", { required: "Skill is required" })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="SkillLevel">Skill Level</label>
              <select className="inputFeild" id="SkillLevel" {...register("skillOneLevel")}>
                <option>Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>SkillFul</option>
                <option>Experienced</option>
                <option>Expert</option>
              </select>
            </div>
        </div>
          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="Skill2">Skill Name</label>
              <input
                type="text"
                className="skillInput inputFeild"
                id="Skill2"
                placeholder="e.g Web Design"
                {...register("skillTwo")}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="SkillLeve3">Skill Level</label>
              <select className="inputFeild" id="SkillLeve3" {...register("skillTwoLevel")}>
                <option>Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>SkillFul</option>
                <option>Experienced</option>
                <option>Expert</option>
              </select>
            </div>
        </div>
          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="Skill3">Skill Name</label>
              <input
                type="text"
                className="skillInput inputFeild"
                id="Skill3"
                placeholder="e.g Web Design"
                {...register("skillThree")}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="SkillLeve3">Skill Level</label>
              <select className="inputFeild" id="SkillLeve3" {...register("skillThreeLevel")}>
                <option>Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>SkillFul</option>
                <option>Experienced</option>
                <option>Expert</option>
              </select>
            </div>
        </div>

            </div>

          <div className="eduBtn">
            <NavLink to="/buildportfolio/edu/wordhistory/summary">
              <button className="workBtn">Previous</button>
            </NavLink>
            {/* <NavLink to="/buildportfolio/edu/wordhistory/summary/skills/projects"> */}
              <button className="workBtn" type="submit">Next</button>
            {/* </NavLink> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default Skills;
