import React, { useContext } from 'react'
import { Context } from '../context/context';

function TodoList() {
    const {todos , deleteItem} = useContext(Context)
    return (
        <ul className='ml-[50px]'>
            {todos.map((item) => (
                <li key={item.index} className='p-[10px] mt-[20px] mx-auto w-[800px] border-2 rounded-lg flex items-center justify-between'>
                    <div className='flex items-center gap-[15px]'>
                        <p className='text-green-300'>{item.id}.</p>
                        <p className=''>{item.title}</p> 
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <button onClick={() => deleteItem(item.id)}className='px-[20px] border-2 rounded-lg text-red-700'>Delete</button>
                        <button className='px-[20px] border-2 rounded-lg text-green-400'>Update</button>
                        <input className='w-[25px] h-[22px] rounded-t-full ' type="checkbox" id={item.id} />
                    </div>
                  
                    
                </li>
            ))}
        </ul>
    )
}

export default TodoList