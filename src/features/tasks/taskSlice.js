import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      } else return;
    },

    updateTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload.id);
      if (taskFound) {
        taskFound.title = action.payload.title;
        taskFound.description = action.payload.description;
      } else return;
    }
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
