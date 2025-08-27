import React, { createContext, useEffect, useState } from 'react';
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todotask, setTodotask] = useState([]);

    useEffect(() => {
        const task = localStorage.getItem('task');
        if (task) {
            setTodotask(JSON.parse(task));
        }
    }, []);

    const getTask = () => {

        const task = localStorage.getItem('task');
        if (task) {
            return JSON.parse(task);

        }
        return []

    }



    const addTodo = (item) => {
        const task = getTask();
        task.push(item)
        localStorage.setItem('task', JSON.stringify(task))
        setTodotask(task)

    }

    const deleteTodo = (id)=>{
        const task = getTask();
        const updatedTasks = task.filter(t=>t.id !=id)
        localStorage.setItem('task',JSON.stringify(updatedTasks));
        setTodotask(updatedTasks);
    }

    return (
        <TodoContext.Provider value={{ addTodo, todotask, deleteTodo }}>
            {
                children
            }

        </TodoContext.Provider>
    );
};

export default TodoProvider;