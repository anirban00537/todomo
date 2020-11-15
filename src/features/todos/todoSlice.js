import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;
