

import React from 'react';
import useAuth from '../../hooks/useAuth';


import {useState, useEffect} from 'react';
import Header from '../Home/Header/Header';


const NonAdminuser = () => {
    const {user} =useAuth();
    return (
        <div>
            <Header></Header>
             <div className='flex lg:flex-row flex-col  max-w-6xl items-center justify-center py-20 mx-auto '>
                 
                 <div className='  flex flex-col space-y-3 justify-center'>

                    <h1 className='text-4xl font-bold text-blue-500'>{user?.name}</h1>

                    <p className='font-bold text-xl'>Email: </p>
                    <h1 className=' font-bold text-gray-500'> {user?.email}</h1>

                    <div className="flex">
           
              
                    {/* <h1>Badge: {user_to_show.user?.badge}</h1> */}



                    </div>
                 
                 </div>
                 <div
                  className=" flex items-center  "
               
                >
                  <img className="rounded-full h-[350px] w-[350px] object-cover" src={user?.photo} />
                </div>



            </div>
        </div>
    );
};

export default NonAdminuser;