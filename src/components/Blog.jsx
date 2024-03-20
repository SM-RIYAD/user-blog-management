
import Header from '../pages/Home/Header/Header';
import { useLoaderData } from 'react-router-dom';
import { useState,useEffect } from 'react';
import BlogCards from './BlogCards';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      fetch("blogs.json")
        .then((result) =>result.json()).then((data) =>setBlogs(data))
      
        
     
        .catch((error) => console.log(error));
    }, []);

    console.log("blogs,",blogs)
    return (
        <div>
        <Header></Header>

        
            <div className=' mt-5 grid grid-cols-1 gap-5  lg:max-w-6xl lg:mx-auto mx-5'>

                {

blogs.map((blog,idx) =><BlogCards key={idx} blog={blog}></BlogCards>)
                }
                 </div> 



           
       
        </div>
    );
};

export default Blog;