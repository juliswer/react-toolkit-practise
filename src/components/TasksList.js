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
        <div className="grid-cols-4">
          <div key={task.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
                <div className="tooltip" data-tip={task.id}>
                  <h2>ID: {getShortId(task.id)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
