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
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" />
        </div>
    );
};

export default Banner;