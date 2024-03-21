import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../Home/Header/Header";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const axiosPublic = useAxiosPublic();
  const errorToast = (loginError) =>
    toast.error(loginError, { position: "bottom-center" });

  const SuccessToast = (successmsg) =>
    toast.success(successmsg, { position: "bottom-center" });
  const { user,setUser } = useContext(AuthContext);
 
 
  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;

    let password = e.target.password.value;
    let test = e.target.test.value;

    if(email.length===0 || password.length===0){

     
      errorToast("Fields cannot be empty!");
      return;

    }
    const userinfo= {
      email,password
    
    }
  axiosPublic.post("/login",userinfo, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.message) {
        Swal.fire({
          title: "Failed!",
          text: "Login error",
          icon: "error",
          confirmButtonText: "Cool"
        });
   
      }
      else{
        setUser(response.data);

        console.log("this is from context",user)
        Swal.fire({
          title: "Success!",
          text: "Login successful",
          icon: "success",
          confirmButtonText: "Cool"
        });
   

      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors if any
    });

  };

  return (
    <div className="">
      <Header></Header>
      <ToastContainer />
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:block hidden lg:text-left h-1/2 w-1/2  ">
            <img
              className="h-full object-cover"
              src="https://i.ibb.co/dDYVyz5/vecteezy-cloud-computing-modern-flat-concept-for-web-banner-design-5879539.jpg"
              alt=""
            />
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
             
                />
                    <input
                  type="text"
                  name="test"
                  placeholder="test"
                  className="input hidden input-bordered"
             
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
                  
                />
          
              </div>
              <div className="form-control mt-6">
                <button  className="btn bg-black btn-primary border-0 text-white">
                  Login
                </button>
               
              </div>
              {/* <button onClick={handleGoogleSignin} className=" btn mt-5 bg-red-600 btn-primary border-0 text-white">
                  Log In With Google
                </button> */}
            </form> 
            <div className="flex justify-center w-full">
         

            </div>
           
      
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
