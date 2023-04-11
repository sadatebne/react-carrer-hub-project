import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';

const AppliedJobs = () => {
    const jobs=useLoaderData();
     //console.log(jobs)

    return (
        <div>
            <div>
              <h1>Applied Jobs</h1>
            </div>
            <div>
            {
                jobs.map(job=><ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>)
            }
            </div>
            
            
        </div>
    );
};

export default AppliedJobs;