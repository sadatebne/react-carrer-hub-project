import React, { useState } from 'react';
import ShowFeatures from '../ShowFeatures/ShowFeatures';
import './Features.css';

const Features = ({ jobs }) => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const handleShowAllJobs = () => {
    setShowAllJobs(true);
  };

  return (
    <div className='category-details'>
      <h2>Featured Jobs</h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='features'>
        {showAllJobs
          ? jobs.map(job => <ShowFeatures key={job.id} job={job} />)
          : jobs.slice(0, 4).map(job => <ShowFeatures key={job.id} job={job} />)
        }
      </div>
      {!showAllJobs && (
        <div>
          <button className='btn-show' onClick={handleShowAllJobs}>
            Show All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default Features;
