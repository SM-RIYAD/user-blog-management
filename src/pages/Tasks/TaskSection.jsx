import React, { useCallback } from 'react';
import { useDrop } from "react-dnd";
import SingleTask from './SingleTask';
import Swal from "sweetalert2";
import axios from 'axios';
const TaskSection = ({task_lists,status,refetch,task_loading}) => {
//     const handleDrop = (item) => {
//         console.log("dropped item", item,status);
// ///updating status

// const taskinfo={


//   task_status:status
// }

// axios.patch(`http://localhost:5000/update/task/${item._id}`,taskinfo, {
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
// .then((response) => {
//   console.log(response.data);
//   if (response.data.modifiedCount > 0) {
//     // Swal.fire({
//     //   title: "Success!",
//     //   text: "Task Updated Successfully",
//     //   icon: "success",
//     //   confirmButtonText: "Cool",
//     // });
//     refetch();
//   }
// })
// .catch((error) => {
//   console.error("Error:", error);
//   // Handle errors if any
// });


//       };
    
const handleDrop = useCallback((item) => {


const taskinfo={
task_status:status
}

axios.patch(`https://taskify-server-pi.vercel.app/update/task/${item._id}`,taskinfo, {
headers: {
  "Content-Type": "application/json",
},
})
.then((response) => {
console.log(response.data);
if (response.data.modifiedCount > 0) {
  // Swal.fire({
  //   title: "Success!",
  //   text: "Task Updated Successfully",
  //   icon: "success",
  //   confirmButtonText: "Cool",
  // });
  refetch();
}
})
.catch((error) => {
console.error("Error:", error);
// Handle errors if any
});

}, [status, refetch]);
const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
    
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    return (
        <div ref={drop}   className="in-progress   min-h-screen border border-black border-5  p-5">
        <h2 className='text-center uppercase text-2xl text-black font-bold '> {status} </h2>
        {
task_loading?  <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div> : (   task_lists.map((task, idx) => (
          <SingleTask refetch={refetch} key={task._id} task={task}></SingleTask>
        )))
        }
     
      </div>
    );
};

export default TaskSection;