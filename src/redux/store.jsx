import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import student from "./Student.jsx";

export const store = configureStore({
  reducer: {
    counter,
    student,
  },
});
