import React, { createContext, useState } from 'react';
export const TodoContext = createContext();

 export const TodoProvider = ({children}) => {

    const[todotask , setTodotask] = useState();


    const getTodo = ()=>{
        const task = localStorage.getItem('task');
        if(task){
            return JSON.parse(task);

        }
        return []
    }

    const setTodo =(item)=>{
        const task = getTodo();

        task.push(item);
        localStorage.setItem('task', JSON.stringify(task))


    }
 
    return (
        <TodoContext.Provider value={{setTodo}}>
            {
                children
            }
            
        </TodoContext.Provider>
    );
};

export default TodoProvider;