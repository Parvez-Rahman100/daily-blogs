import React from 'react';
import './header.css';
import blog from '../../assests/blog.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-titles">
                <span className='headerTitleLg'>Daily Blogs</span>
            </div>
            <img className='headerImg' src={blog} alt="" />
        </div>
    );
};

export default Header;