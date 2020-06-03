import React from "react";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/Authentification/actions";

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
  const user_id = useSelector((state) => state.authentification.user_id);

  const user_token = useSelector((state) => state.authentification.user_token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get("user_token")) {
      fetch(`https://api-minireseausocial.mathis-dyk.fr/users/me`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("user_token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          dispatch(loadUser(response));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/login">
              {isAuthenticated ? (
                <Redirect to={"/profiles/" + user_id} />
              ) : (
                <Login />
              )}
            </Route>

            <Route path={`/profiles/:profileSlug`}>
              {isAuthenticated ? <Profile /> : <Redirect to="/login" />}
            </Route>
            <Route path="/register">
              {isAuthenticated ? (
                <Redirect to={"/profiles/" + user_id} />
              ) : (
                <Register />
              )}
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
