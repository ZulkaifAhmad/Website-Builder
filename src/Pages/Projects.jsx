import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";

function Projects() {
  const navigate = useNavigate(); 
  const { register, handleSubmit } = useFormData(); 

  const onSubmit = (data) => {
    console.log(data);
    navigate("/buildportfolio/edu/wordhistory/summary/skills/projects/services"); 
  };

  return (
    <>
      <div className="projects">
        <h1 id="pageNumber">.../Summary/Skills/Projects</h1>
        <div className="workheading">
          <h1 className='workHeading'>Add Your Projects</h1>
          <p id='workP'>Add Details Of your Projects.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="projectForm">
          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="name">Project Name</label>
              <input className="inputFeild"
                type="text"
                id="name"
                placeholder="Project Name"
                {...register("projectName", { required: "Project Name is required" })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="clientName">Client Name</label>
              <input className="inputFeild"
                type="text"
                id="clientName"
                placeholder="Client Name"
                {...register("clientName")}
              />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="category">Project Category</label>
              <input className="inputFeild"
                type="text"
                id="category"
                placeholder="Project Category"
                {...register("projectCategory")}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="deadline">Project Deadline</label>
              <input className="inputFeild"
                type="text"
                id="deadline"
                placeholder="Project Deadline"
                {...register("projectDeadline")}
              />
            </div>
          </div>

          <div className="eduBtn">
            <NavLink to="/buildportfolio/edu/wordhistory/summary/skills">
              <button className="workBtn" type="button">Previous</button>
            </NavLink>
            <button className="workBtn" type="submit">Next</button> 
          </div>
        </form>
      </div>
    </>
  );
}

export default Projects;
