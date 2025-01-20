import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormContext';

function Services() {
    const navigate = useNavigate(); 
    const { register, handleSubmit,setState } = useFormData();

    const onSubmit = (data) => {
        console.log(data);
        setState(data)

        navigate('/buildportfolio/edu/wordhistory/summary/skills/projects/services/portfoliowebsite','_blank');
    };
    
    const handleProcessToWebsite = () => {
        window.open('/buildportfolio/edu/wordhistory/summary/skills/projects/services/portfoliowebsite', '_blank', 'noopener,noreferrer');
    };
    

    return (
        <>
            <div className="services">
                <h1 id="pageNumber">.../Skills/Projects/Services</h1>
                <div className="workheading">
                    <h1 className='workHeading'>Add Your Services</h1>
                    <p id='workP'>Enter The Detail Of Your Services</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='servicesForm'>
                    <div className="inputs">
                        <div>
                            <label className="inputLabel" htmlFor="serviceName">Service Name</label>
                            <input  className="inputFeild"
                                type="text" 
                                id='serviceName' 
                                placeholder='e.g App Development' 
                                {...register("serviceName", { required: "Service Name is required" })} 
                            />
                        </div>
                        <div>
                            <label className="inputLabel" htmlFor="serviceDuration">Service Duration</label>
                            <input  className="inputFeild"
                                type="text" 
                                id='serviceDuration' 
                                placeholder='e.g 2 Weeks' 
                                {...register("serviceDuration")} 
                            />
                        </div>
                    </div>

                    <div className="inputs">
                        <div>
                            <label className="inputLabel" htmlFor="pricing">Pricing</label>
                            <input  className="inputFeild"
                                type="text" 
                                id='pricing' 
                                placeholder='e.g $299.00' 
                                {...register("pricing")} 
                            />
                        </div>
                        <div>
                            <label className="inputLabel" htmlFor="category">Category</label>
                            <select className="inputFeild" id="category" {...register("category")}>
                                <option value="">Service Category</option>
                                <option value="Development">Development</option>
                                <option value="Software Designing">Software Designing</option>
                                <option value="Software Testing">Software Testing</option>
                            </select>
                        </div>
                    </div>

                    <div className="rapperBtn flex gap">
                        <div className="eduBtn">
                            <NavLink to="/buildportfolio/edu/wordhistory/summary/skills/projects">
                                <button className='workBtn' type="button">Previous</button>
                            </NavLink>
                        </div>
                        <div className="eduBtn createWebsite">
                            <button className='CreateBtn' type="submit">Process to Website</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Services;
