import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { compose } from "redux";
import registerReducer from "./Register/reducer";
import FetchApi from "./Api/fetchApi";

const store = createStore(
  registerReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(FetchApi());

export default store;
