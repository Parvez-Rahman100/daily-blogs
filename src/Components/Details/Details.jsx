import React from 'react';
import SideBar from '../SideBar/SideBar';
import SingleBlog from '../SingleBlog/SingleBlog';
import './details.css';

const Details = () => {
    return (
        <div className='details'>
            <SingleBlog/>
            <SideBar/>
        </div>
    );
};

export default Details;