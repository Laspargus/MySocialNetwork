import React from "react";
import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { compose } from "redux";
import registerReducer from "./Register/reducer";

const store = createStore(
  registerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

export default store;
