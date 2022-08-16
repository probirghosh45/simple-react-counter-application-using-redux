// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";

// const store = createStore(counterReducer);
const store = configureStore(counterReducer);

export default store;