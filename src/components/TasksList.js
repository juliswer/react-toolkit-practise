import React from "react";
import { useSelector } from "react-redux";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  const getShortId = (id) => {
    const idString = id.toString();
    return `${idString.substring(0, 4)}...${idString.substring(
      idString.length - 4
    )}`;
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>ID: {getShortId(task.id)}</h2>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
