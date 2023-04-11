import React from 'react';
import ShowFeatures from '../ShowFeatures/ShowFeatures';
import './Features.css'

const Features = ({jobs}) => {
    //console.log (jobs)
    return (
        <div className='category-details'>
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='features'>
                {
                    jobs.map(job=><ShowFeatures key={job.id} job={job}></ShowFeatures>)
                }
            </div>
            <div>
                <button className='btn-show'>Show All Jobs</button>
            </div>
        </div>
    );
};

export default Features;