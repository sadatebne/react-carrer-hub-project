import React from 'react';
import './ShowFeatures.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const ShowFeatures = ({job}) => {
    //console.log(job)
    const {id, company_logo, job_title, company_name, fulltime_or_parttime, remote_or_onsite, location,  salary} = job;
    return (
        <div className='show-features'>
            <img src={company_logo} alt="" />
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div className='btn-feature'>
                <button>{remote_or_onsite}</button>
                <button>{fulltime_or_parttime}</button>
            </div>
            <div className='feature-para'>
                <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> Salary : {salary}</p>
            </div>
            <button className='btn-view'><Link to={`/${id}`}><span className='btn-view-text'>View Details</span></Link></button>
        </div>
    );
};

export default ShowFeatures;