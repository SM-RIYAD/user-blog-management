
import React from 'react';
import useAuth from '../../hooks/useAuth';


import {useState, useEffect} from 'react';


const UserProfile = () => {

    // const meals= useMeals();

    const {user} =useAuth();









    return (
        <div>
             <div className='flex lg:flex-row flex-col  gap-10 p-20 '>
                 
                 <div className='  flex flex-col space-y-3 justify-center'>

                    <h1 className='text-4xl font-bold text-blue-500'> {user?.displayName}</h1>

                    <p className='font-bold text-xl'>Email: </p>
                    <h1 className=' font-bold text-gray-500'> {user?.email}</h1>

                    <div className="flex">
           
              
                    {/* <h1>Badge: {user_to_show.user?.badge}</h1> */}



                    </div>
                 
                 </div>
                 <div
                  className=" flex items-center  "
               
                >
                  <img className="rounded-full h-[350px] w-[350px] object-cover" src={user?.photoURL} />
                </div>



            </div>
        </div>
    );
};

export default UserProfile;