/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaPhone, FaEnvelope, FaSms } from 'react-icons/fa';


const Navbar = () => {
  const nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light col-md" id="topNav">
      <img src="https://i.imgur.com/k7CmF7q.png" width="100px"/>
      <img src="https://i.imgur.com/DAcNLUc.png" width="300px" />
      <ul className="nav flex-row navbar-nav ml-auto">
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
    </nav>
  );


  return (
    <div>
      {nav()}
    </div>
  );
};

export default Navbar;
