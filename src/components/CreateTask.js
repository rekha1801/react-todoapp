import React, { useState } from "react";

export default function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: "500px",
            borderRadius: "10px",
            height: "30px",
            backgroundColor: "#69f0ae",
            border: "none",
            textAlign: "center",
          }}
          type="text"
          placeholder="Please enter a new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
