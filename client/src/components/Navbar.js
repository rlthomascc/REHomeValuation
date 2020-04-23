/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaPhone, FaEnvelope, FaSms } from 'react-icons/fa';


const Navbar = () => {
  const nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="http://www.thedelrealgroup.com/"  target="_blank"><img src="https://i.imgur.com/k7CmF7q.png" width="100px"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link justify-content-end" id="contactNumber" href="tel:12094958907"><FaPhone className="nav-icon" /></a>
          </li>

          <li className="nav-item">
            <a className="nav-link justify-content-end" id="contactNumber" href="sms:12094958907"><FaSms className="nav-icon" /></a>
          </li>

          <li className="nav-item">
            <a className="nav-link justify-content-end" id="contactNumber" href="mailto:don@thedelrealgroup.com"><FaEnvelope className="nav-icon" /></a>
          </li>
        </ul>
      </div>
    </nav>
  );


  return (
    <div>
      {nav()}
    </div>
  );
};

export default Navbar;
