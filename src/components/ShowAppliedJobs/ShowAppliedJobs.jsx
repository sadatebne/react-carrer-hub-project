import React from 'react';
import './ShowAppliedJobs.css'
import { Link } from 'react-router-dom';

const ShowAppliedJobs = ({ job }) => {
    //console.log(job)

    const { id, company_logo, company_name, contact_information, educational_requirements, experiences, fulltime_or_parttime, job_description, job_responsibility, job_title, location, remote_or_onsite, salary } = job

    return (
        <div className='Show-applied-jobs'>
            <img src={company_logo} alt="" />

            <div className='applied-jobs'>
                <h3>{job_title}</h3>
                <p>{company_name}</p>
                <div className='btn-applied-jobs'>
                    <button>{remote_or_onsite}</button>
                    <button>{fulltime_or_parttime}</button>
                </div>
                <div className='applied-jobs-p'>
                    <p>{location}</p>
                    <p>Salary : {salary}</p>
                </div>
            </div>

            <button className='btn-view-dtls'><Link to={`/${id}`}><span className='btn-view-text'>View Details</span></Link></button>

        </div>
    );
};

export default ShowAppliedJobs;