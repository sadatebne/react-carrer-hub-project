import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [filterType, setFilterType] = useState('');

    const filteredJobs = filterType ? jobs.filter(job => job.remote_or_onsite === filterType) : jobs;

    return (
        <div>
            <div>
                <h1>Applied Jobs</h1>
            </div>
            <div className='select-option'>
                <select onChange={(event) => setFilterType(event.target.value)} name="filter" id="filter">
                    <option value="">Filter By</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>
            </div>
            <div className='show-jobs'>
                {filteredJobs.map(job => <ShowAppliedJobs key={job.id} job={job} />)}
            </div>

        </div>
    );



};

export default AppliedJobs;