import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <div className="bg-base-200">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <a
            href="github.com/juliswer"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="github.com/juliswer"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="github.com/juliswer"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Settings
          </a>
        </li>
        <li className="mr-2">
          <a
            href="github.com/juliswer"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Contacts
          </a>
        </li>
      </ul>

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
