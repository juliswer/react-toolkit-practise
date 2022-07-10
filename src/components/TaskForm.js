import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  return (
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
  );
}

export default TaskForm;
