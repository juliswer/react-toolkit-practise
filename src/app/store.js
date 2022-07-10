import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";
import updateTaskReducer from '../features/tasks/updateTaskSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        updateTask: updateTaskReducer
    }
});
