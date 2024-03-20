import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ManageUser = () => {

    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`users`);
            console.log("this are the users in response:",res.data)
            return res.data;
        }
    })



    
    return (
        <div className='border '>
            This is manage user
            <div>
         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Username
 
 </th>
        <th>UserEmail</th>
        <th>Password</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {

 users.map((user)=> <tr key={user._id}>
  <th>{user.name}</th>
  <td>{user.email}</td>
  <td>{user.password}</td>
  <td><button onClick={()=>{}} className='btn btn-xs btn-error text-white'> Edit </button><button onClick={()=>{}} className='btn btn-xs btn-error text-white'> Delete </button></td>

</tr>

 )

      }
    
    </tbody>
  </table>

</div>


        </div>
        </div>
    );
};

export default ManageUser;