import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import './home.css';

const Home = () => {
    return (
        <>
        <Header/>
        <div className='home'>
           <Blogs/>
           <SideBar/> 
        </div>
        </>
    );
};

export default Home;