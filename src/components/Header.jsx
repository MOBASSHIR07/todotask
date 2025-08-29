import React, { useContext } from 'react';
import { TodoContext } from '../Context/TodoProvider';

const Header = () => {

    const {todotask,active,completed} = useContext(TodoContext);
    return (
        <div className='w-11/12 mx-auto border shadow-xl rounded-md flex justify-between  py-4 px-2 my-10 font-semibold'>
            <p> All :{todotask.length}</p>
            <p> Active :{active?.length}</p>
            <p> Completed : {completed?.length}</p>

            
        </div>
    );
};

export default Header;