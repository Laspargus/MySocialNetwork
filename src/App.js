import React from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
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
