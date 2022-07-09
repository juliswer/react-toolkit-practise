import { useSelector } from "react-redux";

function TaskForm() {
  const tasks = useSelector((state) => state.tasks);

  console.log(`TaskForm: tasks: ${tasks}`);

  return <div>TaskForm</div>;
}

export default TaskForm;
