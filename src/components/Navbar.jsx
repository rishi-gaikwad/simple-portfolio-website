import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import "animate.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <ul className="navlink">
            <li>
              <Link to="/" className="active  animate__bounceOut">
                Home
              </Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
