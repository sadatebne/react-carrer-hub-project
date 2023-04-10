import React from 'react';
import './Category.css'
import DisplayCategory from '../DisplayCategory/DisplayCategory';

const Category = ({ categories }) => {

    return (
        <div className='category-details'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='category'>
                {
                    categories.map(category => <DisplayCategory key={category.id} category={category}></DisplayCategory>)
                }
            </div>


        </div>
    );
};

export default Category;