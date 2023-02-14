import React from "react";
import "./App.css";

const NavBar = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <nav className="navbar navbar-light bg-light fixed-top">
          <div>
            <a className="navbar-brand  mx-3">Shopio</a>
            <i className="bi bi-list menu-icon"></i>
          </div>
          <div className="search-area">
            <input
              className="search-input"
              type="text"
              placeholder="Search products & brands"
            />
            <i className="bi bi-search search-icon"></i>
          </div>

          <div className="btn-group mx-3 col-sm-12 w-25 ">
          <button className="btn btn-sm btn-outline-dark my-2 my-sm-0" type="submit">
            Download
          </button>
          <button className="btn btn-sm btn-outline-dark my-2 my-sm-0" type="submit">
            Login
          </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
