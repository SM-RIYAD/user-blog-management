import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from '../Home/Header/Header';

const Addblog = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.blog_title.value;
    
        const photo = form.photo.value;
        const date = form.date.value;
        const description = form.description.value;
 
    
      
          const newBlog = {
          title,
          date,
            description,
           
            photo,
          };
      
          console.log(" added Blog is  ", newBlog);
          ///sending product to server
        //   fetch("https://brand-website-server.vercel.app/addproduct", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(newBlog),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log(data);
        //       if (data.insertedId) {
        //         Swal.fire({
        //           title: "Success!",
        //           text: "Blog Added Successfully",
        //           icon: "success",
        //           confirmButtonText: "Cool",
        //         });
        //       }
        //     });
    
        
      
      };
    return (
        <div>
            <Header></Header>
             <h1 className="text-4xl font-bold text-center py-5">ADD A Blog</h1>
      <div className="lg:max-w-6xl   mx-auto bg-blue-300 rounded-xl shadow-xl">
       
        <form onSubmit={handleAddProduct} className="card-body ">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="w-full lg:w-1/2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Blog Title</span>
                </label>
                <input
                  type="text"
                  name="blog_title"
                  placeholder="Enter your product name"
                  className="input input-bordered"
                  required
                />
              </div>
 

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="enter photo url"
                  className="input input-bordered"
                  required
                />
              </div>

            </div>
            <div className="lg:w-1/2 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
     

         
            </div>
          </div>
          <input type="submit" value="Add Blog" className="btn btn-block" />
        </form>
      </div>
        </div>
    );
};

export default Addblog;