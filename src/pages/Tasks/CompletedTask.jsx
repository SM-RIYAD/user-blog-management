import React from 'react';
import { useDrop } from "react-dnd";
import SingleTask from './SingleTask';
import Swal from "sweetalert2";
import axios from 'axios';
const CompletedTask = ({task_lists,status,refetch}) => {
    const handleDrop = (item) => {
        console.log("dropped item", item,status);
///updating status

const taskinfo={


  task_status:status
}

axios.patch(`http://localhost:5000/update/task/${item._id}`,taskinfo, {
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


      };
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
    
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    return (
        <div ref={drop}  className="in-progress min-h-screen border bg-yellow-500 p-5">
        <h2>In {status} {task_lists.length}</h2>
        {task_lists.map((task, idx) => (
          <SingleTask key={idx} task={task}></SingleTask>
        ))}
      </div>
    );
};

export default CompletedTask;