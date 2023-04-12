import React from 'react';
import './ShowJobDetails.css'
import { addToDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign, faPhone,faEnvelope,faUserPen } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


const ShowJobDetails = ({ job }) => {
    //console.log(job)
    const { id, company_logo, company_name, contact_information, educational_requirements, experiences, fulltime_or_parttime, job_description, job_responsibility, job_title, location, remote_or_onsite, salary } = job

    const handleJobs = (id) => {
        addToDb(id);
        toast.success("🎉 Congratulations, your application has been submitted!");
    }

    return (
        <div className='showJobDetails'>
            <div className='showJobDetails-part-1'>
                <p><span className='j-title'>Job Description: </span>{job_description}</p>
                <p><span className='j-title'>Job Responsibility: </span>{job_responsibility}</p>
                <div>
                    <h3>Educational Requirements:</h3>
                    <p>{educational_requirements}</p>
                </div>
                <div>
                    <h3>Experiences:</h3>
                    <p>{experiences}</p>
                </div>
            </div>

            <div>
                <div className='showJobDetails-part-2'>
                    <h3>Job Details</h3>
                    <hr />
                    <p><FontAwesomeIcon icon={faDollarSign} /> <span>Salary: </span>{salary}</p>
                    <p><FontAwesomeIcon icon={faUserPen} /> <span>Job Title: </span>{job_title}</p>
                    <h3>Contact Information</h3>
                    <hr />
                    <p><FontAwesomeIcon icon={faPhone} /> <span>Phone: </span>{contact_information && contact_information.phone}</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> <span>Email: </span>{contact_information && contact_information.email}</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> <span>Address: </span>{location}</p>
                </div>

                <div>
                    <button className='btn-apply' onClick={() => handleJobs(id)}><Link to="/applied_jobs"><span className='btn-view-text'>Apply Now</span></Link></button>
                </div>

            </div>
        </div>
    );
};

export default ShowJobDetails;