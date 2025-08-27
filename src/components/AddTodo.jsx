import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoProvider';


const AddTodo = () => {
    const {setTodo } = useContext(TodoContext);
  const [isOpen, setIsopen] = useState(false);

  const handleAddtodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const date = e.target.date.value;

    if (!title.trim() || !description.trim() || !date.trim()) {
      alert("All fields are required!");
      return;
    }

    const newTodo = {id:Date.now(), title, description, date, completed:false };
    
    setTodo(newTodo)
    e.target.reset();
    setIsopen(false);
  };

  return (
    <div className='my-4'>
      <button className='btn btn-success' onClick={() => setIsopen(true)}>
        + Add Todo
      </button>

      {isOpen && (
        <div className='modal modal-open'>
          <div className='modal-box relative'>
            <h3 className="font-bold text-lg mb-4">Task Details</h3>

            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={() => setIsopen(false)}
            >
              ✕
            </button>

            <form onSubmit={handleAddtodo} className="space-y-3">
              <input
                type="text"
                name='title'
                placeholder='Add a task title'
                className="input input-bordered w-full"
              />

              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
              />

              <textarea
                name="description"
                placeholder="Enter description"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <div className='flex gap-3'>
                <button 
                  type="button" 
                  onClick={() => setIsopen(false)} 
                  className="btn bg-gray-300 "
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success ">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
