import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
console.log("photo url",user?.photoURL); 
  const handleLogout =()=>{

    logOut()
    .then(result => {
      console.log(result.user)})
    .catch(err=>console.log(err));

  }

  const navLinks = (
    <>
      <li className={`${user ?'pt-10':'pt-5' } `} >
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={`${user ?'pt-10':'pt-5' } `}>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
      <li className={`${user ?'pt-10':'pt-5' } `}>
        <NavLink to="/opinion">Opinion</NavLink>
      </li>

      <li className={`${user ?'pt-10':'pt-5' } `}>
        <NavLink to='/dashboard/profile'>Dashboard</NavLink>
      </li>
      <li>

          {

            user&& <div className=" lg:ms-10  flex items-center flex-col mt-2 gap-2  ">
           
            <div className="rounded-full ">
              <div className="w-12  rounded-full ">
                <img className="rounded-full" src={user?.photo} />
              </div>
            </div>
            <p className="font-bold">{user.name}</p>
          </div>
          }

      </li>
    </>
  );
  return (
    <div className="   ">
      <div className="navbar  lg:max-w-6xl mx-auto   ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu z-40 menu-sm dropdown-content mt-3  p-2 shadow bg-blue-300 rounded-box w-52"
            >
           {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost  uppercase text-blue-400 font-bold text-2xl">
            Taskify
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
  
          {user?.displayName? (
         
              <button onClick={handleLogout} className="btn btn-error  border-0 "> Logout</button>
           
          ) : (
            <Link to={"/login"}><button className="btn border-0   "> Lets Explore</button> </Link> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
