import {createContext, useState } from 'react'

export const Context = createContext()

export const TodoContext = ({children}) => {
    const [todos , setTodos] = useState([]) 

    const saveTodo = (obj) => {
       setTodos([...todos, obj])  
    }

    // DeleteITEM 
    const deleteItem = (id) => {
        const findedItem = todos.findIndex(item => item.id == id);
        todos.splice(findedItem, 1)
        setTodos([...todos])
    }
  return (
        <Context.Provider value={{todos, setTodos, saveTodo, deleteItem}}>
            {children}
        </Context.Provider>
)
}
