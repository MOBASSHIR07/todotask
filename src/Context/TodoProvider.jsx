import React, { createContext, useEffect, useState } from 'react';
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todotask, setTodotask] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [active, setActive] = useState([]);
    const [filter, setFilter] = useState("all"); 
    const [taskToDisplay, SettaskToDisplay] = useState([]);
    const[searchItem , setSearchItem] = useState("");
    const[searchResult , setSearchResult] = useState([]);
    const[loading , setLoading] = useState(true)




    useEffect(() => {
        const task = localStorage.getItem('task');
        if (task) {
            setTodotask(JSON.parse(task));
        }
         setLoading(false);
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

    const deleteTodo = (id) => {
        const task = getTask();
        const updatedTasks = task.filter(t => t.id != id)
        localStorage.setItem('task', JSON.stringify(updatedTasks));
        setTodotask(updatedTasks);
    }

    const editTodo = (id, updatedData) => {
        const task = getTask();
        const updatedTasks = task.map(t =>
            t.id === id ? { ...t, ...updatedData } : t
        );
        localStorage.setItem('task', JSON.stringify(updatedTasks));
        setTodotask(updatedTasks);
    };

    useEffect(() => {
        setCompleted(todotask.filter(t => t.completed));
        setActive(todotask.filter(t => !t.completed));
    }, [todotask]);

    const toggleComplete = (id) => {
        const updatedTasks = todotask.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );

        setTodotask(updatedTasks);
        localStorage.setItem("task", JSON.stringify(updatedTasks));
        // const updatedCompleted = updatedTasks.filter((t) => t.completed);
        // setCompleted(updatedCompleted);
        // const updatedActive = updatedTasks.filter((t) => !t.completed);
        // setActive(updatedActive);
    };
        
      useEffect(()=>{

       const getFilterTask = ()=>{
            switch (filter) {
            case 'completed':
                return completed;
            case 'active':
                return active;
            case 'all':
            default:
                return todotask;
        }
      
        

       }
       SettaskToDisplay(getFilterTask());

      },[filter,todotask,active,completed])

    const filterCategory = (type)=>{
        setFilter(type);

    } 


    const handleSearchTask = (title)=>{
     setSearchItem(title)

     
     if(filter==="completed"){
        const result = completed.filter(task=>
        task.title.toLowerCase().includes(title.toLowerCase())
     )
     SettaskToDisplay(result);
     }
     else if(filter==="active"){
         const result = active.filter(task=>
        task.title.toLowerCase().includes(title.toLowerCase())
         )
          SettaskToDisplay(result);
     }
     else {
        const tasks = getTask();
         const result = tasks.filter(task=>
        task.title.toLowerCase().includes(title.toLowerCase())
         )
       SettaskToDisplay(result);
     }
     
    //  setSearchResult(result)
     

    // SettaskToDisplay(searchResult)

    }

  



    return (
        <TodoContext.Provider value={{ addTodo, todotask, deleteTodo, editTodo, toggleComplete, completed, active,  filterCategory ,
         taskToDisplay, handleSearchTask, searchItem , setSearchItem ,loading}}>
            {
                children
            }

        </TodoContext.Provider>
    );
};

export default TodoProvider;