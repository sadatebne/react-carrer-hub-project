import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Features from '../Features/Features';

const Home = () => {
    const categories =useLoaderData();
    //console.log (categories)
    return (
        <div>
            <Banner></Banner>
            <Category categories={categories}></Category>
            <Features></Features>
        </div>
    );
};

export default Home;