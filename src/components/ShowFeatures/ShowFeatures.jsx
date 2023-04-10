import React from 'react';
import './ShowFeatures.css'
import { Link } from 'react-router-dom';

const ShowFeatures = ({job}) => {
    //console.log(job)
    const {id, company_logo, job_title, company_name, fulltime_or_parttime, remote_or_onsite, location,  salary} = job;
    return (
        <div className='show-features'>
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div>
                <button>{remote_or_onsite}</button>
                <button>{fulltime_or_parttime}</button>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button><Link to={`/${id}`}>View Details</Link></button>
        </div>
    );
};

export default ShowFeatures;