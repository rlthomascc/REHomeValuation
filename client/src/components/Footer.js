/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaPhone, FaEnvelope, FaSms } from 'react-icons/fa';


const Footer= () => {
  const footer = () => (
    <div className="footer text-center d-flex flex-column">
        <div className="p2">
            <a href="http://www.TheDelRealGroup.com/" target="_blank"><p className="font-weight-bold text-dark">www.TheDelRealGroup.com</p></a>
        </div>
        <div className="p2">
            <div className="d-flex flex-row justify-content-center">
                <div className="p2">
                    <a className="nav-link justify-content-end" id="contactNumber" href="tel:12094958907"><FaPhone className="nav-icon" /></a>
                </div>
                <div className="p2">
                    <a className="nav-link justify-content-end" id="contactNumber" href="sms:12094958907"><FaSms className="nav-icon" /></a>
                </div>
                <div className="p2">
                    <a className="nav-link justify-content-end" id="contactNumber" href="mailto:don@thedelrealgroup.com"><FaEnvelope className="nav-icon" /></a>
                </div> 
            </div>
        </div>
    </div>    
  );


  return (
    <div>
      {footer()}
    </div>
  );
};

export default Footer;
