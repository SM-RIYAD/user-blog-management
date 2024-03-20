import { useDrag } from "react-dnd";
import Swal from "sweetalert2";
import React, { useState } from "react";

import { useDrop } from "react-dnd";
import TaskSection from "./TaskSection";

import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SingleTask = ({ task, refetch }) => {

  const [visiblity,setVisibility] = useState(false)
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
        fetch(`https://taskify-server-pi.vercel.app/deleteTask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Job has been deleted.", "success");
              // const remaining = jobs.filter(job => job._id !== id);
              // setJobs(remaining);

              refetch();
            }
          });
      }
    });
  };
  const selectedTask = task;
  // console.log("single task is",selectedTask)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: selectedTask,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const { register, handleSubmit, reset } = useForm();
  const SuccessToast = (successmsg) =>
    toast.success(successmsg, { position: "bottom-center" });
  const errorToast = (Error) =>
    toast.error(Error, { position: "bottom-center" });
  const onSubmit = async (data) => {
    const newTask = {
      task_title: data.taskName,
      task_Priority: data.taskPriority,
      task_deadline: data.deadline,
      task_description: data.description,
      task_user_email: task.task_user_email,
      task_status: task.task_status,
    };
    console.log("to update ", newTask);
    axios
      .patch(`https://taskify-server-pi.vercel.app/update/taskFeatures/${task._id}` , newTask, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: "Task Updated!",
            icon: "success",
            confirmButtonText: "Cool"
          });
        
          setVisibility(!visiblity);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors if any
        errorToast(error.message);
      });




  };
  return (
    <div
      ref={drag}
      className={`card my-5 cursor-grab  bg-black ${
        isDragging ? "opacity-25" : ""
      } shadow-xl`}
    >
      <div className="card-body">
        <h2 className="card-title">{task.task_title}</h2>
        <p>{task.task_description}</p>
        <button className="btn btn-outline text-white btn-xs">
          {task.task_Priority}{" "}
        </button>
        <p>
          <i> Deadline: {task.task_deadline}</i>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(task._id)}
            className="btn btn-xs btn-error"
          >
            Delete
          </button>
          <button
         
            className="btn btn-xs btn-warning"
            onClick={()=>setVisibility(!visiblity)}
          >
            Edit
          </button>


        </div>
        
        {
visiblity && <div>   <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
<div className="grid  grid-cols-1 gap-2">
  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">Task Name</span>
    </label>
    <input 
      type="text"
      defaultValue={task.task_title}
      placeholder="Task Name"
      {...register("taskName", { required: true })}
      required
      className="input text-black input-bordered w-full"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">
        {" "}
        Task Priority
      </span>
    </label>
    <select
      defaultValue={task.task_Priority}
      {...register("taskPriority", { required: true })}
      className="select text-black  select-bordered w-full"
    >
      <option disabled value="default">
        Select a Priority
      </option>
      <option value="Low">Low</option>
      <option value="Moderate">Moderate</option>
      <option value="High">High</option>
    </select>
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">Deadline</span>
    </label>

    <input
      type="date"
      defaultValue={ task.task_deadline}
      placeholder="task deadline time"
      {...register("deadline", { required: true })}
      className="input text-black  input-bordered w-full"
    />
  </div>

  <div className="form-control  ">
    <label className="label">
      <span className="label-text text-black">Description</span>
    </label>
    <textarea
    defaultValue={task.task_description}
      {...register("description")}
      className="textarea text-black  textarea-bordered h-10"
      cols="30"
      rows="10"
      placeholder="task description"
    ></textarea>
  </div>
</div>
<input
  type="submit"
  value="Update Task"
  className="btn btn-block text-black border-none btn-warning "
/>
</form></div>



          }
      
      </div>
    </div>
  );
};

export default SingleTask;
