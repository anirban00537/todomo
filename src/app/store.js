import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoSlice from "../features/todos/todoSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice,
  },
});
