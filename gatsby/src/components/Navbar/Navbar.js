import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/#">
      <h1>Test Site</h1>
    </Link>
    <ul className="navbar-ul">
      <li>
        <Link to="/#">Nav 1</Link>
      </li>
      <li>
        <Link to="/#">Nav 2</Link>
      </li>
      <li>
        <Link to="/#">Nav 3</Link>
      </li>
      <li>
        <Link to="/#">Nav 4</Link>
      </li>
    </ul>
    <div className="nav-btns">
      <Link to="#" className="btn">
        Btn 1
      </Link>
      <Link to="#" className="btn">
        Btn 2
      </Link>
    </div>
  </nav>
);

export default Navbar;
