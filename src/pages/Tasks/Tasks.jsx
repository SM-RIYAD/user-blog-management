import React, { useState } from "react";
import SingleTask from "./SingleTask";
import { useDrop } from "react-dnd";
import TaskSection from "./TaskSection";

import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

import useAuth from "../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


const Tasks = () => {

  const [todoTasks,setTodoTasks]=useState([]);
  const [onGoingTasks,setOnGoingTasks]=useState([]);
  const [completedTasks,setCompletedTasks]=useState([]);
  const {user}=useAuth();
  const {data: tasks = [], isPending: task_loading, refetch } = useQuery({
    queryKey: ['tasks'],

    queryFn: async() =>{
        const res = await axios.get(`https://taskify-server-pi.vercel.app/tasks?email=${user?.email}`);
        const unfiltered_tasks=res.data;
        console.log("unfiltered tasks",unfiltered_tasks);


        const todo_t= [...unfiltered_tasks].filter((task)=>task.task_status==="To do")
        setTodoTasks(todo_t);
        
        const completed_t= [...unfiltered_tasks].filter((task)=>task.task_status==="Completed")
        setCompletedTasks(completed_t);
        const ongoing_t= [...unfiltered_tasks].filter((task)=>task.task_status==="Ongoing")
        setOnGoingTasks(ongoing_t);
        return res.data;
    }
})

  console.log("todo tasks:  :", todoTasks);
  console.log("ongoing tasks:  :", onGoingTasks);
  console.log("completed tasks:  :", completedTasks);

  const { register, handleSubmit, reset } = useForm();
  const SuccessToast = (successmsg) =>
  toast.success(successmsg, { position: "bottom-center" });
  const errorToast = (Error) =>
  toast.error(Error, { position: "bottom-center" });
  const onSubmit = async (data) => {
   
const newTask= {
  task_title: data.taskName,
  task_Priority:data.taskPriority,
  task_deadline:data.deadline,
  task_description:data.description,
  task_user_email:user?.email,
  task_status:"To do"
}
console.log("new task ",newTask)
axios.post("https://taskify-server-pi.vercel.app/addtask",newTask, {
  headers: {
    "Content-Type": "application/json"
  }
})
.then((response) => {
  console.log(response.data);
  if (response.data.insertedId) {
    // Swal.fire({
    //   title: "Success!",
    //   text: "Meal Added Successfully",
    //   icon: "success",
    //   confirmButtonText: "Cool"
    // });
refetch();
    SuccessToast("Successfully Created a Task !");
  }
})
.catch((error) => {
  console.error("Error:", error);
  // Handle errors if any
  errorToast(error.message);
});



  };
  return (
    <div className=" text-white"> 
      <div className="flex  w-full justify-center">
        <button
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
          className="btn btn-primary mt-10 bg-black text-white border-0"
        >
          {" "}
          Create A Task{" "}
        </button>
        <dialog id="my_modal_1" className="modal">
          <ToastContainer />
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn  btn-sm btn-circle  absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black  ">
              <div className="grid  grid-cols-1 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Task Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Task Name"
                    {...register("taskName", { required: true })}
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">
                      {" "}
                      Task Priority
                    </span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("taskPriority", { required: true })}
                    className="select select-bordered w-full"
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
                    <span className="label-text text-black">Deadline</span>
                  </label>

                  <input
                    type="date"
                    placeholder="task deadline time"
                    {...register("deadline", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text text-black">Description</span>
                  </label>
                  <textarea
                    {...register("description")}
                    className="textarea textarea-bordered h-10"
                    cols="30"
                    rows="10"
                    placeholder="task description"
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Create Task"
                className="btn btn-block text-white border-none bg-black "
              />
            </form>
          </div>
        </dialog>
      </div>

      {

task_loading? <p>loading...</p>:    <div className="grid p-10 lg:grid-cols-3 grid-cols-1 pt-10 text-gray gap-5">
<TaskSection task_loading={task_loading} status="To do" refetch={refetch} task_lists={todoTasks}>
  {" "}
</TaskSection>

{/* <ToDoTask status="To do" refetch={refetch} task_lists={todoTasks}></ToDoTask> */}
<TaskSection task_loading={task_loading} status="Ongoing" refetch={refetch} task_lists={onGoingTasks}>
  {" "}
</TaskSection>
{/* <OngoingTask status="Ongoing" refetch={refetch} task_lists={onGoingTasks}></OngoingTask> */}
<TaskSection task_loading={task_loading} status="Completed" refetch={refetch} task_lists={completedTasks}>
  {" "}
</TaskSection>
{/* <CompletedTask status="Completed" refetch={refetch} task_lists={completedTasks}></CompletedTask> */}
</div>
      }
   
    </div>
  );
};

export default Tasks;
