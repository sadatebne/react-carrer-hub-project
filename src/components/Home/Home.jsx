import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Features from '../Features/Features';

const Home = () => {
    
    const jobs=useLoaderData();
    //console.log (jobs)
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Features jobs={jobs}></Features>
        </div>
    );
};

export default Home;