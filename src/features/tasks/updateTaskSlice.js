import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "updateTask",
  initialState: [],
  reducers: {
    loadTask: (state, action) => {
        state.push(action.payload);
    }
  },
});

export const { loadTask } = taskSlice.actions;
export default taskSlice.reducer;