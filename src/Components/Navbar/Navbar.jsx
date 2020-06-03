import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./../../redux/Api/Authentification/actions";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    Cookies.remove("user_token");
    Cookies.remove("user_id");
    dispatch(logoutUser());
  };

  const isAuthenticated = useSelector(
    (state) => state.authentification.isAuthenticated
  );

  const user_id = useSelector((state) => state.authentification.user_id);
  const username = useSelector((state) => state.authentification.username);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MySocialNetwork
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to={"/profiles/" + user_id}>
                Profile
              </Link>
            </li>
          )}
          {!isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Sign In
              </Link>
            </li>
          )}

          {!isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign up
              </Link>
            </li>
          )}

          {isAuthenticated && (
            <li className="nav-item">
              <button className="btn btn-info" onClick={handleSignOut}>
                Sign Out
              </button>
            </li>
          )}

          {isAuthenticated && <li className="nav-item">{username}</li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
