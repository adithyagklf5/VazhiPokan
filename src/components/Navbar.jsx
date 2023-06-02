import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "./context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Access the navigate function

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
    navigate("/home"); // Redirect to the home page
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg">
        <div
          className="collapse navbar-collapse Mainheader Mainheading"
          id="navbarTogglerDemo01"
        >
          <Link to="/about" className="navbar-brand">
            <h3 className="text-white heading">Vazhi Pokkan</h3>
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active nav-item">
              <Link className="nav-link text-white navlnk" to="/home">
                Home
              </Link>
            </li>
            {isAuthenticated && !isAdmin && (
              <li className="nav-item active">
                <Link className="nav-link text-white navlnk" to="/create">
                  Create Blog
                </Link>
              </li>
            )}

            {isAuthenticated && !isAdmin && (
              <li className="nav-item active">
                <Link className="nav-link text-white navlnk" to="/userpage">
                  My blog
                </Link>
              </li>
            )}
            {isAuthenticated && isAdmin && (
              <li className="nav-item active">
                <Link className="nav-link text-white navlnk" to="/userpage">
                  My blog
                </Link>
              </li>
            )}

            {isAuthenticated && !isAdmin && (
              <li className="nav-item active nav-item">
                <button
                  className="nav-link text-white navlnk"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

            {isAuthenticated && isAdmin && (
              <>
                <li className="nav-item active nav-item">
                  <Link className="nav-link text-white navlnk" to="/read">
                    Admin page
                  </Link>
                </li>
                <li className="nav-item active nav-item">
                  <button
                    className="nav-link text-white navlnk"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!isAuthenticated && (
              <>
                <li className="nav-item active nav-item">
                  <Link className="nav-link text-white navlnk" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item active nav-item">
                  <Link className="nav-link text-white navlnk" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
