import React from "react";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentification.isAuthenticated
  );

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/profile" /> : <Login />}
          </Route>
          <Route path="/profile">
            {!isAuthenticated ? <Redirect to="/login" /> : <Profile />}
          </Route>
          <Route path="/register">
            {isAuthenticated ? <Redirect to="/profile" /> : <Register />}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
