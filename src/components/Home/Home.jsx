import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories =useLoaderData();
    //console.log (categories)
    return (
        <div>
            <Banner></Banner>
            <Category categories={categories}></Category>
        </div>
    );
};

export default Home;