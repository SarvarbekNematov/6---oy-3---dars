import React from "react";

export const Form = ({ setData, defaultValue, editedItem }) => {
  const [userName, setUserName] = React.useState(
    defaultValue ? defaultValue : ""
  );
  const submit = (e) => {
    e.preventDefault();
    if (defaultValue) {
      editedItem(userName);

      return;
    }
    setData((state) => {
      return [...state, { name: userName, id: Date.now() }];
    });
    setUserName("");
  };
  return (
    <form className="flex items-center justify-center gap-[20px] pt-[40px]" onSubmit={submit}>
      <input className="border-2 rounded-[12px] w-[300px] h-[40px] pl-[20px]"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text"
        name="userName"
      />
      <button className="border-2 p-[9px] rounded-[10px]"  type="submit">{defaultValue ? "edit" : "send"}</button>
    </form>
  );
};
