import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);
    setValue("");
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add task"
          className="input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="add-btn" onClick={addItem}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
