import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer); //createStore deprecated
// const store = configureStore(counterReducer);  //redux-toolkit used from vs code suggestion

export default store;