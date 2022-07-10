import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

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

  const handleChange = (e) => {
    const id = Date.now();
    const taskFound = tasks.find((task) => (task.id = id));
    if (!taskFound) {
      setTask({
        ...task,
        [e.target.name]: e.target.value,
        id,
      });
    } else {
      alert("Task already exists, please try again later");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.length > 0 && task.description.length > 0) {
      dispatch(addTask(task));
      setTask({
        id: "",
        title: "",
        description: "",
      });
    }
  };

  const handleSaveLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center mb-7">
                Write a Task
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
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Save Task</button>
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
