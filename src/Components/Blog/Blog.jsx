import React from 'react';
import './blog.css';

const Blog = ({blog}) => {
    const {img,blogDate} = blog;
    return (
        <div className='blog'>
            <img className='blogImg' src={img} alt="blogPic" />
            <div className="blogInfo">
                <div className="blogCatagories">
                    <span className="blogCatagory">Music</span>
                    <span className="blogCatagory">Life</span>
                </div>
                <span className="blogTitle">Lorem ipsum dolor sit amet consectetur.</span>
                <hr />
                <span className="blogDate">
                    {blogDate}
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quia natus voluptates aperiam fuga laboriosam neque veniam odit quisquam quaerat?</p>
            </div>
        </div>
    );
};

export default Blog;