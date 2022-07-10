import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";

import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

function TaskForm() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const [task, setTask] = React.useState({
    id: "",
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleChange = (e) => {
    const id = Math.floor((Math.random() * 1000000) ^ 20);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      if (task.title.length > 0 && task.description.length > 0) {
        setIsLoading(true);
        const foundTask = tasks.find((taskStore) => taskStore.id === task.id);
        if (!foundTask) {
          dispatch(addTask(task));
          setTask({
            id: "",
            title: "",
            description: "",
          });
        } else {
          return (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! Task failed successfully.</span>
              </div>
            </div>
          );
        }
        setIsLoading(false);
      } else {
        dispatch(updateTask(task));
        setTask({
          id: "",
          title: "",
          description: "",
        });
        setIsEditing(false);
      }
    }
  };

  const handleSaveLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const taskToUpdate = useSelector((state) => state.updateTask);
  const loadData = () => {
    setTask(taskToUpdate[0]);
    setIsEditing(true);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button onClick={loadData}>Load Data</button>
              <h1 className="text-3xl font-bold text-center mb-7">
                {isEditing ? "Edit your task" : "Write a Task"}
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    value={task.title}
                    placeholder="Title"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    name="description"
                    onChange={handleChange}
                    value={task.description}
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    {!isLoading ? "Save Task" : "Saving..."}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Fab icon={"Save"} onClick={handleSaveLocalStorage} />
    </div>
  );
}

export default TaskForm;
