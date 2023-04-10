import React from 'react';
import './DisplayCategory.css';

const DisplayCategory = ({category}) => {
    //console.log(category)
    const {id, image, job_title, available_jobs} =category;
    return (
        <div>
            <div className='category-show-details'>
                <img src={image} alt="" />
                <h3>{job_title}</h3>
                <p>{available_jobs} Jobs Available</p>
            </div>
        </div>
    );
};

export default DisplayCategory;