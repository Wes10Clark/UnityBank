import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Unity Bank</h1>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/deposit" className="link">
            Deposit
          </Link>
        </li>
        <li>
          <Link to="/withdraw" className="link">
            Withdraw
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
