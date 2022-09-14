import React from "react";

export default function Task({ task, taskCompleted, deleteTask, index }) {
  return (
    <div
      style={{
        backgroundColor: "#8d6e63",
        color: "white",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
          padding: "20px",
          borderRadius: "10px",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
        <span>
          <button
            style={{
              backgroundColor: task.completed ? "#69f0ae" : "#e57373",
              borderRadius: "20px",
              float: "right",
            }}
            onClick={() => taskCompleted(index)}
          >
            completed
          </button>
          <button
            style={{
              backgroundColor: "#eeff41",
              borderRadius: "5px",
              float: "right",
            }}
            onClick={() => deleteTask(index)}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}
