import React, { useContext } from "react";
import { Context } from "../../context/context";

export const Form = () => {
  const {todos, setTodos , saveTodo} = useContext(Context)
  const submit = (e) => {
    e.preventDefault();
    const data = {
      id:todos.length + 1,
      title:e.target.userName.value,
      isComplated:false
    }
    saveTodo(data)
    e.target.reset()
  };
  return (
    <form className="flex items-center justify-center gap-[20px] pt-[40px]" onSubmit={submit}>
      <input className="border-2 rounded-[12px] w-[300px] h-[40px] pl-[20px]"
        type="text"
        name="userName"
      />
      <button className="border-2 p-[9px] rounded-[10px]"  type="submit">Send</button>
    </form>
  );
};
