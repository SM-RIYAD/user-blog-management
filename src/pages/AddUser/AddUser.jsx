import React from 'react';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../Home/Header/Header";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const AddUser = () => {
    const errorToast = (regError) =>
    toast.error(regError, { position: "bottom-center" });

  const SuccessToast = (successmsg) =>
    toast.success(successmsg, { position: "bottom-center" });

  const [regError, SetRegError] = useState("");

    const axiosPublic = useAxiosPublic();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log("name in reg ", name);
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
    
             
        if (password.length < 6) {
          errorToast("Password should be of at least 6 digits");
          return;
        } else if (!/[A-Z]/.test(password)) {
          errorToast("Password should have at least one capital letter");
          return;
        } else {
    console.log("")
    const userinfo= {
        name,password,photo,email,isAdmin:false
      
      }
    axiosPublic.post("/adduser",userinfo, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool"
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors if any
      });





        }
      };
    return (
        <div>
               <div>
    
      <ToastContainer />
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left h-1/2 w-1/2 lg:block hidden  ">
            <img
              className="h-full object-cover"
              src="https://i.ibb.co/dDYVyz5/vecteezy-cloud-computing-modern-flat-concept-for-web-banner-design-5879539.jpg"
              alt=""
            />
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="enter photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
             
              </div>
              <div className="form-controls mt-6">
                <button className="btn bg-black btn-primary border-0 text-white">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddUser;