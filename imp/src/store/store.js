import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './darkModeSlice';
  
export const store = configureStore({
    reducer: {
        // todos: toReducer,
        darkMode: darkModeReducer,
    },
});