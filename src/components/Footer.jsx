import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Unity Bank. All rights reserved.</p>
        <ul className="nav">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
