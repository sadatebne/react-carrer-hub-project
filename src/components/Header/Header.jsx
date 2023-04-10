import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-details'>
            <h1>JobsFinder</h1>
            <div className='header-nav'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied_jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='btn-header'>Star Applying</button>
        </div>
    );
};

export default Header;