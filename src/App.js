import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Header from "./components/Header";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <div className="bg-base-200">
      <Header />
      

      <div className="flex">
        <div className="grid grid-cols-4 mx-auto">
          <TaskForm />
        </div>
        <div className="grid grid-cols-8 mx-auto">
          <TasksList />
        </div>
      </div>
    </div>
  );
}

export default App;
