import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { loadTask } from "../features/tasks/updateTaskSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const getShortId = (id) => {
    const idString = id.toString();
    return `${idString.substring(0, 2)}...${idString.substring(
      idString.length - 2
    )}`;
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdate = (id, title, description) => {
    const taskBody = {
      id,
      title,
      description,
    }
    dispatch(loadTask(taskBody));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div className="grid-cols-4" key={task.id}>
          <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="tooltip" data-tip={task.id}>
                  <h2>ID: {getShortId(task.id)}</h2>
                </div>
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline btn-info"
                    onClick={() => handleUpdate(task.id, task.title, task.description)}
                  >
                    Update
                  </button>
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
