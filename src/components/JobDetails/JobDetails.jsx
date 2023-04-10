import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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

    console.log(job)
    // const [jobs, setJobs]=useState([])

    // useEffect(()=>{
    //     fetch('jobDetails.json')
    //     .then(res=>res.json())
    //     .then(data=>setJobs(data))

    //     const j= jobs.map(job=>console.log(job))
    //     // console.log(j)
    // },[])

    return (
        <div>
            <h1>Job Details: {job.id}</h1>
        </div>
    );
};

export default JobDetails;