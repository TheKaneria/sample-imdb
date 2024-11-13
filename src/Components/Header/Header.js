import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              className="header_icon"
            />
          </Link>
          <div className="mx-3 d-none d-md-block">
            <label className="input input-bordered input-primary flex items-center gap-2 w-96 ">
              <input type="text" className="grow " placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <button className="btn btn-primary btn-outline d-none d-md-block ">
            Search
          </button>
        </div>
        <div className="headerRight">
          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span>Popular</span>
          </Link>
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span>Top Rated</span>
          </Link>
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span>Upcoming</span>
          </Link>
        </div>

        <div className="menuIcon" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-solid fa-circle-xmark" />
          ) : (
            <i className="fa-solid fa-bars" />
          )}
        </div>
      </div>
      <div className={menuOpen ? "responsive_div open" : "responsive_div"}>
        <div className="mx-3 d-flex align-items-center">
          <input
            type="text"
            placeholder=" search movie...."
            className="inputtext input"
          />
          <button className="btn btn-danger" onClick={() => {}}>
            Search
          </button>
        </div>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span> Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
