import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowJobDetails from '../ShowJobDetails/ShowJobDetails';

const JobDetails = () => {
     const {jobDetails}=useParams();
     //console.log(jobDetails)

    const data=useLoaderData();
    //console.log(data);

    const [job , setJob]=useState({})

    useEffect(()=>{
        const f= data.find(dt=>dt.id==jobDetails)
        //console.log(f)
        setJob(f)
       
    },[])

    //console.log(job)
    

    return (
        <div>
            <div>
                <h1>Job Details</h1>
            </div>
            <div>
                <ShowJobDetails job={job}></ShowJobDetails>
            </div>
        </div>
    );
};

export default JobDetails;