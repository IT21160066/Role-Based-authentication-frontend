import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/user"} className="nav-link text-white">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link text-white">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
