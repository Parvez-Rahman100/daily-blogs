import React from 'react';
import blogs from '../../Data/blogs.json';
import Blog from '../Blog/Blog';
import './blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;