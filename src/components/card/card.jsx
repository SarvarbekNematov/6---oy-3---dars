import React from "react";
import { Form } from "../form/form";

export const Card = ({ name, id, setData }) => {
  const [show, setShow] = React.useState(false);
  const deleteItem = () => {
    setData((data) => {
      return data.filter((item) => item.id != id);
    });
  };
  const editItem = () => {
    setShow(!show);
  };
  const editedItem = (newValue) => {
    setData((data) => {
      return data.map((item) =>
        item.id === id ? { name: newValue, id } : item
      );
    });

    setShow(false);
  };
  return (
    <div className="ml-[40px] mt-[30px]">
      {show ? (
        <div className="mt-[30px] mb-[30px] ml-[-1100px]">
          <Form editedItem={editedItem} defaultValue={name} />
        </div>
      ) : (
        <h1 className="text-[30px] ml-[20px] text-green-500 mb-[20px]">{name}</h1>
      )}
      <button className="border-2 rounded-[10px] p-[10px] w-[100px]" onClick={deleteItem}>delete</button>
      <button className="border-2 rounded-[10px] p-[10px] w-[100px] ml-[30px]" onClick={editItem}>edit</button>
    </div>
  );
};
