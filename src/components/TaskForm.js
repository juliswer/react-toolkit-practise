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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add</button>
      </form>
      <Fab
        icon={"Save"}
        onClick={handleSaveLocalStorage}
      />
    </div>
  );
}

export default TaskForm;
