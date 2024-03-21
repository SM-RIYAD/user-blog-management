import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

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

const handleEdit =(e)=>{
  e.preventDefault();

    const username= e.target.user_name.value;
    const userpassword= e.target.user_password.value;
    const useremail= e.target.user_email.value; 
    const userphoto= e.target.user_photo.value;
    const userId=e.target.user_id.value;

    const userinfo={

        name:username,
        email:useremail,
        password:userpassword,
        photo:userphoto,
        



    }
    console.log("review text",userinfo);

    axiosPublic
    .patch(`/updateuser/${userId}`, userinfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "User Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        refetch();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors if any
    });


}

const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/deleteuser/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Review has been deleted.", "success");
            // const remaining = jobs.filter(job => job._id !== id);
            // setJobs(remaining);

            refetch();
          }
        });
    }
  });
};
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

 users.map((user,idx)=> <tr key={user._id}>
  <th>{user.name}</th>
  <td>{user.email}</td>
  <td>{user.password}</td>
  <td><button   onClick={() => {
                          handleDelete(user._id);
                        }} className='btn btn-xs btn-error text-white'> Delete </button>
  
  <button
                        onClick={() => {
                            document.getElementById(`${idx}`).showModal();
                        }}
                        className="btn btn-xs btn-error ms-1 text-white"
                      >
                        {" "}
                        Edit{" "}
                      </button>
                      <dialog id={`${idx}`} className="modal">
                {/* <ToastContainer /> */}
                  <div className="modal-box">
                  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                  <form onSubmit={ handleEdit} className="card-body  ">
                  <div className="grid grid-cols-1 gap-2">
                <div className="form-control">
           
                  <label className="label">
                    <span className="label-text text-black">Name </span>
                  </label>
                  <textarea
                    type="text"
                    name="user_name"
                    defaultValue={user.name}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />


<label className="label">
                    <span className="label-text text-black">Email </span>
                  </label>
                  <textarea
                    type="text"
                    name="user_email"
                    defaultValue={user.email}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text text-black">Password </span>
                  </label>
                  <textarea
                    type="text"
                    name="user_password"
                    defaultValue={user.password}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                          <label className="label">
                    <span className="label-text text-black">Photo </span>
                  </label>
                  <textarea
                    type="text"
                    name="user_photo"
                    defaultValue={user.photo}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                       <textarea
                    type="text"
                    name="user_id"
                    value={user._id}
                    placeholder="User Name"
                    className="input hidden input-bordered"
                    required
                  />
                </div>
           

             

        
                <div className="form-control ">
             
               <input
                  type="submit"
            
                  value="Update"
                  className="btn bg-red-500 mt-5 text-white border-none w-full  btn-primary"
                /> <div className="modal-action">
               
                </div>
              
                </div>

             
                
              
              </div>
              </form>
                    
                  </div>
                </dialog>
  </td>

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