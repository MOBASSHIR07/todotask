import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import { TodoContext } from '../Context/TodoProvider';
import TaskDescription from './TaskDescription';
import Loader from './Loader';



const AddTodo = () => {
  const { addTodo, todotask, deleteTodo, editTodo, completed, toggleComplete, taskToDisplay, loading } = useContext(TodoContext);
  const [isOpen, setIsopen] = useState(false);
  const [isupdating, setUpdating] = useState(false)
  const [currentTask, setCurrentTask] = useState(null);

  // const detectKyeDown = (e)=>{
  //   console.log("pressed", e.key);
  //   if(e.key==="Enter" && isOpen){

  //       handleAddtodo()
  //   }
  //   if(e.key==="Enter" && isupdating){
  //       handleUpdateTodo()
  //   }
  //   if(e.key==="Escape"){
  //     setIsopen(false);
  //     setUpdating(false);
  //   }

  // }
  // useEffect(()=>{

  //   document.addEventListener('keydown', detectKyeDown, true)

  // },[isOpen,isupdating])


  useEffect(() => {
    const detectKeyDown = (e) => {
      if (e.key === "Escape" && (isOpen || isupdating)) {
        setIsopen(false);
        setUpdating(false);
      } else if (e.key === "Enter" && (isOpen || isupdating)) {
        e.preventDefault();
        const form = document.getElementById("todoForm");
        if (form) form.requestSubmit();
      }
    };

    document.addEventListener("keydown", detectKeyDown);
    return () => document.removeEventListener("keydown", detectKeyDown);
  }, [isOpen, isupdating]);





  const handleAddtodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const date = e.target.date.value;

    if (!title.trim() || !description.trim() || !date.trim()) {
      alert("All fields are required!");
      return;
    }
    const formattedDate = format(new Date(date), "EEE, dd MMM yyyy");

    const newTodo = { id: Date.now(), title, description, date: formattedDate, completed: false };

    addTodo(newTodo)
    e.target.reset();
    setIsopen(false);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (!currentTask) return;
    const date = e.target.date.value;
    const formattedDate = format(new Date(date), "EEE, dd MMM yyyy");
    const updatedData = {
      id: currentTask.id,
      title: e.target.title.value,
      description: e.target.description.value,
      date: formattedDate


    };
    editTodo(updatedData.id, updatedData);
    setUpdating(false);
    setCurrentTask(null);
  };

  if (loading) {
    return <Loader></Loader>
  }


  return (
    <div className='  md:w-11/12 mx-auto my-4'>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h3 className="text-3xl text-center sm:text-left">Tasks</h3>

        <button
          className="btn btn-success text-white w-3/4 sm:w-auto"
          onClick={() => setIsopen(true)}
        >
          <FaPlus /> <span>Add Task</span>
        </button>
      </div>


      {(isOpen || isupdating) && (
        <div className='modal modal-open'>
          <div className='modal-box relative'>
            <h3 className="font-bold text-lg mb-4">Task Details</h3>

            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={() => {
                setIsopen(false);
                setUpdating(false);
              }}
            >
              ✕
            </button>

            <form id="todoForm" onSubmit={isupdating ? handleUpdateTodo : handleAddtodo} className="space-y-3">
              <label className="block font-medium">Title</label>
              <input
                type="text"
                name='title'
                placeholder='Add a task title'
                className="input input-bordered w-full"
                defaultValue={isupdating && currentTask ? currentTask.title : ''}
              />
              <label className="block font-medium">Date</label>
              <input
                type="text"
                name="date"
                placeholder="Select date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !e.target.value && (e.target.type = "text")}
                className="input input-bordered w-full"
                defaultValue={isupdating && currentTask ? currentTask.date : ''}
              />
              <label className="block font-medium">Any Description to your task</label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="textarea textarea-bordered w-full"
                defaultValue={isupdating && currentTask ? currentTask.description : ''}
              ></textarea>

              <div className='flex gap-3'>
                <button
                  type="button"
                  onClick={() => {
                    setIsopen(false);
                    setUpdating(false);
                  }}
                  className="btn bg-gray-300 "
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success ">
                  {isupdating ? 'Update' : 'Add Task'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}




      {/* display task card */}
      <div className="grid gap-4 my-10">
        {taskToDisplay.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          taskToDisplay.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-5"
            >

              {/* <div className="flex items-start gap-3 w-2/3 "> */}
              <div className="flex items-start gap-3 w-full md:w-2/3">
                <input
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  disabled={task.completed}
                  type="checkbox"
                  className={`w-5 h-5 mt-1 ${task.className ? "text-green-500 cursor-not-allowed" : " accent-green-500 cursor-pointer"}`}
                />
                <div className=''>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {task.title}
                  </h4>
                  {/* <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {task.description}
            </p> */}
                  <TaskDescription   description={task.description}></TaskDescription>
                </div>
              </div>


               <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-1/3 mt-3 md:mt-0 justify-between md:justify-end text-gray-600">
                <div className="flex items-center gap-2 text-sm">
                  <FaRegCalendarAlt className="text-gray-500" />
                  <span>{task.date}</span>
                </div>

                <button onClick={() => {
                  setUpdating(true);
                  setCurrentTask(task);
                }} disabled={task.completed}
                  className={`p-2 rounded-md 
                         ${task.completed
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-500 hover:text-blue-700"
                    }`} >
                  <FaRegEdit size={18} />
                </button>
                <button onClick={() => { deleteTodo(task.id) }} className="hover:text-red-500">
                  <FaTrashAlt size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddTodo;
