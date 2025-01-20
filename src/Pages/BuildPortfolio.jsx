import React from 'react';
import './BuildPortfolio.css';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';

function BuildPortfolio() {
  // const { FormMethods } = useFormData();
  const { register, handleSubmit ,FormMethods} = useFormData();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/buildportfolio/edu');
  };

  return (
    <>
      <div className="buildPortfolio">
        <div className="buildHeading flex justify align">
          <h1 id='pageNumber'>BasicDetails</h1>
          <h2>Start Creating Your Website – Fill Out the Form Below</h2>
        </div>
        <h3 id='basicHeading'>Basic Details (fill all the fields)</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="basicDetails flex direction gap">

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="name">First Name</label>
              <input className='inputField' {...register("firstName")} type="text" id='name' placeholder='First Name' required />
            </div>
            <div>
              <label className="inputLabel" htmlFor="Lname">Last Name</label>
              <input className='inputField' {...register("lastName")} type="text" id='Lname' placeholder='Last Name' required />
            </div>
          </div>

          <div className="address">
            <label className="inputLabel" htmlFor="address">Address</label>
            <textarea className='inputField' id="address" {...register("address")} id="address" placeholder='Your Address' required></textarea>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="email">Email Address</label>
              <input className='inputField' {...register("email")} type="email" id='email' placeholder='Email' required />
            </div>
            <div>
              <label className="inputLabel" htmlFor="Pnumber">Phone Number</label>
              <input className='inputField' {...register("phoneNumber")} type="number" id='Pnumber' placeholder='Phone Number' required />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="zip">ZIP Code</label>
              <input className='inputField' {...register("zipCode")} type="number" id='zip' placeholder='ZIP Code' required />
            </div>
            <div>
              <label className="inputLabel" htmlFor="city">City/Town</label>
              <input className='inputField' {...register("city")} type="text" id='city' placeholder='City/Town Name' required />
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="nation">Nationality</label>
              <input className='inputField' {...register("nationality")} type="text" id='nation' placeholder='Nationality' required />
            </div>
            <div>
              <label className="inputLabel" htmlFor="gender">Gender</label>
              <select className='inputField' {...register("gender")} id='gender' required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="inputs">
            <div>
              <label className="inputLabel" htmlFor="birth">Date Of Birth</label>
              <input className='inputField' {...register("dateOfBirth")} type="date" id="birth" required />
            </div>
            <div>
              <label className="inputLabel" htmlFor="place">Place of Birth</label>
              <input className='inputField' {...register("placeOfBirth")} type="text" id="place" placeholder='Place Of Birth' required />
            </div>
          </div>

          <div className="btn">
            <button className='NextBtn' type="submit">Next : Education</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BuildPortfolio;