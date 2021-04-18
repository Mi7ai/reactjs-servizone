import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <h4>
        <Link to="/">Get all</Link>
      </h4>
    </nav>
  );
}

export default Navbar;
