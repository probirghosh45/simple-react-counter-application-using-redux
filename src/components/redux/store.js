import { createStore ,applyMiddleware } from "redux";
import logger from "redux-logger";
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger))); //createStore deprecated
// const store = configureStore(counterReducer);  //redux-toolkit used from vs code suggestion

export default store;