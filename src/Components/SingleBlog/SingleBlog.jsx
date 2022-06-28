import React from 'react';
import './singleBlog.css';
import edit from '../../assests/icons8-edit.svg';
import dlt from '../../assests/icons8-delete.svg'

const SingleBlog = () => {
    return (
        <div className='singleBlog'>
           <div className="singleBlogWrapper">
            <img className='singleBlogImg' src="https://i.ibb.co/r05k3th/blog2.jpg" alt="" />
            <h1 className='singleBlogTitle'>Lorem ipsum, dolor sit amet </h1>
            <div className="singleBlogEdit">
            <img className='singleBlogIcon' src={edit} alt="editIcon" />
            <img className='singleBlogIcon' src={dlt} alt="deleteIcon" />
            </div>
            <div className="singleBlogInfo">
                <span className="author">Author : <b>Parvez Rahman</b></span>
                <span className='date'>1 hr ago</span>
            </div>
            <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non amet vel, quod ut debitis asperiores nobis, iste architecto beatae nostrum provident aspernatur labore in voluptatem fugiat vitae! Libero odio beatae quis unde dolorum pariatur laudantium dignissimos officiis modi, ex mollitia eveniet quo illo error, exercitationem natus quidem excepturi reiciendis consequuntur asperiores quasi iusto reprehenderit soluta odit? Consequuntur culpa quod dolores eum repellat nisi quidem doloremque labore esse asperiores aperiam modi, similique dolorum, enim voluptas qui voluptatem! Fugiat molestiae voluptatem similique tempora, sint sequi ut! Eius suscipit fuga incidunt, facilis, ea totam nemo aperiam commodi sapiente voluptas est amet modi enim.</p>
           </div>
        </div>
    );
};

export default SingleBlog;