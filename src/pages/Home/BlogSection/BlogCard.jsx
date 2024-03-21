import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={blog.photo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {blog.title}
   
    </h2>
    <p>{blog.description}</p>
 
  </div>
</div>
        </div>
    );
};

export default BlogCard;