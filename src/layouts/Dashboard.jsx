
  import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";


  const Dashboard = () => {
    // const [cart] = useCart();
    const navigate = useNavigate();
    // TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();
    // const { logOut } = useAuth();
    // const handleLogout = () => {
    //   logOut()
    //     .then((result) => {
    //       console.log(result.user);
    //       navigate("/");
    //     })
    //     .catch((err) => console.log(err));
    // };
  
    // const isAdmin=false;
    // console.log("is admin or not", isAdmin);
    return (
    //   <div className="flex font-class  mx-auto lg:max-w-6xl">
    //     {/* dashboard side bar */}
    //     <div className="lg:w-64 min-h-screen bg-gradient-to-r from-gray-600 to-red-500  ">
    //       <ul className="menu space-y-2 p-4 text-white">
    //         {
    //           <>
    //             <li>
    //               <NavLink to="/dashboard">
                
                      
    //                   My Profile</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to="/dashboard/requestedmeals">
    //          Requested Meals
    //               </NavLink>
    //             </li>
    //             {/* <li>
    //                                   <NavLink to="/dashboard/cart">
    //                                       <FaShoppingCart></FaShoppingCart>
    //                                       My Cart ({cart.length})</NavLink>
    //                               </li> */}
    //             <li>
    //               <NavLink to="/dashboard/myreviews">
              
    //         <p>My Reviews </p> 
                
    //               </NavLink>
    //             </li>
    //           </>
    //         }
    //         {/* shared nav links */}
    //         <div className="divider"></div>
    //         {/* <li>
    //           <NavLink to="/">
              
    //             Home
    //           </NavLink>
    //         </li> */}
    //         <li>
    //           <NavLink to="/meals">
    //        Meal Display
    //           </NavLink>
    //         </li>
    //         <li>
    //           {/* <btn
    //             onClick={handleLogout}
    //             className={`border-0 text-start btn btn-sm btn-error `}
    //           ><CiLogout />
                
    //           </btn> */}
    //         <p   > Logout
    //            </p>  
    //         </li>
  
    //         <li>
    //         <img
    //               className="lg:w-[250px] w-[300px]  "
    //               src={` ${"https://i.ibb.co/vZmgLmZ/mealnestlogo-removebg-preview-1.png"}`}
    //             />
    //         </li>
    //       </ul>
    //     </div>
    //     {/* dashboard content */}
    //     <div className="flex-1 p-8">
    //       <Outlet></Outlet>
    //     </div>
    //   </div>
    <div className="drawer   lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content flex flex-col p-20">
    {/* Page content here */}
   
    <label htmlFor="my-drawer-2" className="btn btn-primary bg-black text-white mt-10 drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu bg-gradient-to-r from-cyan-500 to-blue-500 p-4 w-80 min-h-full  text-base-content">
      {/* Sidebar content here */}
   
         
             {
              <>
                <li>
                  <NavLink to="/dashboard/profile">
                
                      
                      My Profile</NavLink>
                </li>
            
                <li>
                  <NavLink to="/dashboard/addusers">
          Add User
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manageusers">
          Manage User
                  </NavLink>
                </li>
                {/* <li>
                                      <NavLink to="/dashboard/cart">
                                          <FaShoppingCart></FaShoppingCart>
                                          My Cart ({cart.length})</NavLink>
                                  </li> */}
          
              </>
            }
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
              
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/meals">
           Meal Display
              </NavLink>
            </li> */}
            <li>
              {/* <btn
                onClick={handleLogout}
                className={`border-0 text-start btn btn-sm btn-error `}
              ><CiLogout />
                
              </btn> */}
            <p   > Logout
               </p>  
            </li>
  
            {/* <li>
            <img
                  className="lg:w-[250px] w-[300px]  "
                  src={` ${"https://i.ibb.co/vZmgLmZ/mealnestlogo-removebg-preview-1.png"}`}
                />
            </li> */}
    </ul>
  
  </div>
</div>
    );
  };
  
  export default Dashboard;
  