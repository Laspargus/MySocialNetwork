import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { compose } from "redux";
import authentificationReducer from "./Api/Authentification/reducer";
import userReducer from "./User/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  authentification: authentificationReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));
// store.dispatch(FetchApi());

export default store;
