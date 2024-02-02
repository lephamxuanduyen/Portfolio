import * as React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <>
    <div className="header">
        <ul className="nav-desktop">
          <li className="nav-item">
            <Link to="/" className="nav-item">
            <i class="fa-solid fa-house"></i>
              Home
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-item">
          <i class="fa-solid fa-file-lines"></i>
              Project
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-item">
            <i class="fa-regular fa-address-card"></i>
              Contact
              </Link>
          </li>
        </ul>
    </div>
    <div className="nav-phone">
    <label>
      <input type="checkbox" />
      <div className="toggle">
        <span className="top-line common"></span>
        <span className="middle-line common"></span>
        <span className="bottom-line common"></span>
      </div>

      <div className="slide">
        <ul>
        <li className="nav-phone-item">
          <i class="fa-solid fa-house"></i>
          <Link to="/">Home</Link>
        </li>
        <li className="nav-phone-item">
        <i class="fa-solid fa-file-lines"></i>
          <Link to="/project">Project</Link>
        </li>
        <li className="nav-phone-item">
          <i class="fa-regular fa-address-card"></i>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
    </label>
  </div>
  </>
  );
}

export default Header