import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';

function Education() {
  const { register, handleSubmit } = useFormData();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
  };

  const handleNext = () => {
    handleSubmit(onSubmit)();
    navigate('/buildportfolio/edu/wordhistory');
  };

  const handlePrevious = () => {
    navigate('/buildportfolio');
  };

  return (
    <>
      <div className="education">
        <h1 id='pageNumber'>BasicDetail/Education</h1>
        <h1 className='eduHeading'>Tell us about your Education</h1>
        <p id='eduDesc'>You’re onto the next section. Where did you attend college or university?</p>
        
        <form className='eduForm'>
        
          <div className="schoolSection">
            <h1 className='sameHeading'>About School</h1>
            <div className="inputs">
              <div>
                <label htmlFor="degree" className="inputLabel">School Degree</label>
                <input 
                  type="text" 
                  id='degree' 
                  className='inputField'
                  placeholder='Degree' 
                  {...register('degree', { required: 'School Degree is required' })}
                />
                
              </div>
              <div>
                <label htmlFor="loc" className="inputLabel">School Location</label>
                <input 
                  type="text" 
                  id='loc' 
                  className='inputField'
                  placeholder='School Location' 
                  {...register('loc', { required: 'School Location is required' })}
                />
              </div>
            </div>

            <div className="address">
              <label htmlFor="schoolName" className="inputLabel">School Name</label>
              <textarea 
                id="schoolName" 
                className='inputField'
                placeholder='School Name' 
                {...register('schoolName', { required: 'School Name is required' })}
              />
            </div>

            <div className="inputs">
              <div>
                <label htmlFor="schoolstart" className="inputLabel">Start Date</label>
                <input 
                  type="date" 
                  id="schoolstart" 
                  className='inputField'
                  {...register('schoolstart', { required: 'Start Date is required' })}
                />
              </div>
              <div>
                <label htmlFor="schoolend" className="inputLabel">End Date</label>
                <input 
                  type="date" 
                  id="schoolend" 
                  className='inputField'
                  {...register('schoolend', { required: 'End Date is required' })}
                />
              </div>
            </div>

            <div className="address eduDesc">
              <label htmlFor="schoolDescription" className="inputLabel">Description</label>
              <textarea 
                id="schoolDescription" 
                className='eduDescChild inputField' 
                placeholder='Description' 
                {...register('schoolDescription', { required: 'Description is required' })}
              />
            </div>
          </div>

          <div className="collegeSection">
            <h1 className='sameHeading'>About College</h1>
            <div className="inputs">
              <div>
                <label htmlFor="coldegree" className="inputLabel">College Degree</label>
                <input 
                  type="text" 
                  id='coldegree' 
                  className='inputField'
                  placeholder='College Degree' 
                  {...register('coldegree', { required: 'College Degree is required' })}
                />
              </div>
              <div>
                <label htmlFor="colloc" className="inputLabel">College Location</label>
                <input 
                  type="text" 
                  id='colloc' 
                  className='inputField'
                  placeholder='College Location' 
                  {...register('colloc', { required: 'College Location is required' })}
                />
              </div>
            </div>

            <div className="address">
              <label htmlFor="colName" className="inputLabel">College Name</label>
              <textarea 
                className='collegeName inputField' 
                id="colName" 
                placeholder='College Name' 
                {...register('colName', { required: 'College Name is required' })}
              />
            </div>

            <div className="inputs">
              <div>
                <label htmlFor="colstart" className="inputLabel">Start Date</label>
                <input 
                  type="date" 
                  id="colstart" 
                  className='inputField'
                  {...register('colstart', { required: 'Start Date is required' })}
                />
              </div>
              <div>
                <label htmlFor="colend" className="inputLabel">End Date</label>
                <input 
                  type="date" 
                  id="colend" 
                  className='inputField'
                  {...register('colend', { required: 'End Date is required' })}
                />
              </div>
            </div>

            <div className="address eduDesc">
              <label htmlFor="colDescription" className="inputLabel">Description</label>
              <textarea 
                id="colDescription" 
                className='eduDescChild inputField' 
                placeholder='Description' 
                {...register('colDescription', { required: 'Description is required' })}
              />
            </div>
          </div>


          <div className="collegeSection">
            <h1 className='sameHeading'>About University </h1>
            <div className="inputs">
              <div>
                <label htmlFor="coldegree" className="inputLabel">University Degree</label>
                <input 
                  type="text" 
                  id='coldegree' 
                  className='inputField'
                  placeholder='University Degree' 
                  {...register('UniversityDegree', { required: 'College Degree is required' })}
                />
              </div>
              <div>
                <label htmlFor="colloc" className="inputLabel">University Location</label>
                <input 
                  type="text" 
                  id='colloc' 
                  className='inputField'
                  placeholder='University Location' 
                  {...register('UniversityLocation', { required: 'College Location is required' })}
                />
              </div>
            </div>

            <div className="address">
              <label htmlFor="colName" className="inputLabel">University Name</label>
              <textarea 
                className='collegeName inputField' 
                id="colName" 
                placeholder='University Name' 
                {...register('UniversityName', { required: 'College Name is required' })}
              />
            </div>

            <div className="inputs">
              <div>
                <label htmlFor="colstart" className="inputLabel">Start Date</label>
                <input 
                  type="date" 
                  id="colstart" 
                  className='inputField'
                  {...register('UniversityStateDate', { required: 'Start Date is required' })}
                />
              </div>
              <div>
                <label htmlFor="colend" className="inputLabel">End Date</label>
                <input 
                  type="date" 
                  id="colend" 
                  className='inputField'
                  {...register('UniversityEndDate', { required: 'End Date is required' })}
                />
              </div>
            </div>

            <div className="address eduDesc">
              <label htmlFor="colDescription" className="inputLabel">Description</label>
              <textarea 
                id="colDescription" 
                className='eduDescChild inputField' 
                placeholder='Description' 
                {...register('UniversityDescription', { required: 'Description is required' })}
              />
            </div>
          </div>

          <div className="eduBtn">
            <button type="button" className="prevBtn eduButton" onClick={handlePrevious}>Previous</button>
            <button type="button" className="nextBtn eduButton" onClick={handleNext}>Next</button>
          </div>

        </form>
        
      </div>
    </>
  );
}

export default Education;