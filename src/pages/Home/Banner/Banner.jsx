import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    return (
        <div className="">
          <div className="hero min-h-screen bg-cover" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1060&t=st=1703096138~exp=1703096738~hmac=beafbe06f1d301073361317dcbedd2846126bc6f69d1e739e5251a05a5fff0d2'}}>
  <div className="hero-overlay  bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1    className="mb-5 lg:text-5xl  text-xl text-white font-bold">Manage Your Tasks</h1>
      <p    className="mb-5 ">
Your streamlined tak management solution! Dive into a world where creating, updating, and deleting tasks is a breeze.  Manage your progress seamlessly by toggling task statuses, all within a user-friendly interface. Taskify: Simplify, Organize, Achieve. Your tasks, your way, anytime, anywhere.</p>
      
      <Link to={"/register"}>  <button 
                 className="btn bg-black btn-primary border-0 text-white">Register</button></Link>
    
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;