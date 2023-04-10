import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-details'>
            <div className='banner-text'>
                <h1 className='header-part-1'>One Step Closer To Your <span className='header-part-2'>Dream Job</span> </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-header'>Get Started</button>
            </div>
            <img src="../../../src/assets/images/user.png" alt="" />
        </div>
    );
};

export default Banner;