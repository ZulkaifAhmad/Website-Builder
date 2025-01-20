import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useFormData } from '../context/FormContext'

function Summary() {
    let navigate = useNavigate()
    let { register, handleSubmit } = useFormData()
    
    function onSubmit(data) {
        console.log(data)
        navigate("/buildportfolio/edu/wordhistory/summary/skills") // Navigate only after successful form submission
    }

    return (
        <>
            <div className="summary">
                <h1 id='pageNumber'>BasicDetail/Education/Work/Summary</h1>

                <div className="workheading">
                    <h1 className='workHead'>Tell us about your Summary</h1>
                    <p id='workP'>Choose from our pre-written examples below or write your own.</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="summaryDesciption flex direction gap">
                        <label className='inputLabel' htmlFor="summaryTextarea">Introduce Yourself in Detail</label>
                        <textarea 
                            placeholder='Summary' 
                            id="summaryTextarea" 
                            {...register("Summary", { required: "Summary is required" })}>
                        </textarea>
                    </div>

                    <div className="eduBtn">
                        <NavLink to="/buildportfolio/edu/wordhistory">
                            <button className='workBtn' type="button">Previous</button>
                        </NavLink>
                        <button className='workBtn' type='submit'>Next</button> {/* Removed NavLink for next */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Summary
