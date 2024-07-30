import {createContext, useState } from 'react'

export const Context = createContext()

export const TodoContext = ({children}) => {
    const [todos , setTodos] = useState([])
  return (
        <Context.Provider value={{todos, setTodos}}>
            {children}
        </Context.Provider>
)
}
