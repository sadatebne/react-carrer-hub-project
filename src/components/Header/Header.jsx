import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={open ? 'header' : 'no-header'}>
            <div onClick={()=>setOpen(!open)} className='menu-bar'>
                <span>{open==true ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</span>
            
            </div>
            <div className={open ? 'header-details-open' : 'header-details'}>
                <h1><Link to="/"><span className='header-h1'>JobsFinder</span></Link></h1>
                <div className='header-nav'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied_jobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <button className='btn-header'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;