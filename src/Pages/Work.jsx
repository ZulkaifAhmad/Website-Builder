import React from "react";
import "./BuildPortfolio2.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";

function Work() {
  const { register, handleSubmit } = useFormData();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
    navigate("/buildportfolio/edu/wordhistory/summary");
  };

  const handlePrevious = () => {
    navigate("/buildportfolio/edu");
  };

  return (
    <>
      <div className="work">
        <h1 id="pageNumber">BasicDetail/Education/Work</h1>
        <div className="workheading">
          <h1 className="workHeading">Tell us about your most recent job</h1>
          <p id="workP">We’ll start there and work backward.</p>
        </div>

        <form
          className="basicDetails workForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="FirstJobHeading" style={{ marginBottom: "1vw" }}>
            First Job/Intrenship
          </h2>
          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                className="inputFeild"
                type="text"
                id="jobTitle"
                placeholder="e.g Manager"
                {...register("jobTitle", { required: "Job Title is required" })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="Jobcompany">
                Company/Organization Name
              </label>
              <input
                className="inputFeild"
                type="text"
                id="Jobcompany"
                placeholder="e.g Software House"
                {...register("Jobcompany", {
                  required: "Company Name is required",
                })}
              />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="jobCountry">
                Job-Country
              </label>
              <input
                className="inputFeild"
                type="text"
                id="jobCountry"
                placeholder="e.g Pakistan"
                {...register("jobCountry", { required: "Country is required" })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="jobCity">
                Job-City/Town
              </label>
              <input
                className="inputFeild"
                type="text"
                id="jobCity"
                placeholder="e.g Peshawar, KPK"
                {...register("jobCity", { required: "City is required" })}
              />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="jobStartDate">
                Job-Start Date
              </label>
              <input
                className="inputFeild"
                type="date"
                id="jobStartDate"
                {...register("jobStartDate", {
                  required: "Start Date is required",
                })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="jobEndDate">
                Job-End Date
              </label>
              <input
                className="inputFeild"
                type="date"
                id="jobEndDate"
                {...register("jobEndDate", {
                  required: "End Date is required",
                })}
              />
            </div>
          </div>

          <div className="inputs workTextArea">
            <label className="inputLabel" htmlFor="jobDescription">
              Job-Description
            </label>
            <textarea
              className="inputFeild jobTextarea"
              id="jobDescription"
              placeholder="Job description"
              {...register("jobDescription", {
                required: "Description is required",
              })}
            ></textarea>
          </div>

          <h2
            className="FirstJobHeading"
            style={{ marginBottom: "1.5vw", marginTop: "1.5vw" }}
          >
            Last Job/Intrenship
          </h2>
          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                className="inputFeild"
                type="text"
                id="jobTitle"
                placeholder="e.g Manager"
                {...register("SecjobTitle", {
                  required: "Job Title is required",
                })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="Jobcompany">
                Company/Organization Name
              </label>
              <input
                className="inputFeild"
                type="text"
                id="Jobcompany"
                placeholder="e.g Software House"
                {...register("SecJobcompany", {
                  required: "Company Name is required",
                })}
              />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="jobCountry">
                Job-Country
              </label>
              <input
                className="inputFeild"
                type="text"
                id="jobCountry"
                placeholder="e.g Pakistan"
                {...register("SecjobCountry", {
                  required: "Country is required",
                })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="jobCity">
                Job-City/Town
              </label>
              <input
                className="inputFeild"
                type="text"
                id="jobCity"
                placeholder="e.g Peshawar, KPK"
                {...register("SecjobCity", { required: "City is required" })}
              />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="jobStartDate">
                Job-Start Date
              </label>
              <input
                className="inputFeild"
                type="date"
                id="jobStartDate"
                {...register("SecjobStartDate", {
                  required: "Start Date is required",
                })}
              />
            </div>
            <div>
              <label className="inputLabel" htmlFor="jobEndDate">
                Job-End Date
              </label>
              <input
                className="inputFeild"
                type="date"
                id="jobEndDate"
                {...register("SecjobEndDate", {
                  required: "End Date is required",
                })}
              />
            </div>
          </div>

          <div className="inputs workTextArea">
            <label className="inputLabel" htmlFor="jobDescription">
              Job-Description
            </label>
            <textarea
              className="jobTextarea"
              id="jobDescription"
              placeholder="Job description"
              {...register("SecjobDescription", {
                required: "Description is required",
              })}
            ></textarea>
          </div>

          <div className="eduBtn">
            <button className="workBtn" type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button className="workBtn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Work;
