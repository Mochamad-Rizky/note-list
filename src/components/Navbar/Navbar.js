import React from "react";

import logo from '../../assets/images/logo/logo.png';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="logo" width="50px"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://www.github.com/Mochamad-Rizky">Github</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/mochamad-rizky/">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
