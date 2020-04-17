/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  FaCheck, FaTimes, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaSms,
} from 'react-icons/fa';
import ReactPixel from 'react-facebook-pixel';
import Navbar from './Navbar';


class Success extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    ReactPixel.init('track', 'CompleteRegistration', {
      value: 'Lead Capture',
    });
  }

  header() {
    return (
      <div className="successHeader">
        <div className="successBody">
          <p className="h1 successTag font-weight-bold text-light text-center">
            Thank you for requesting your Home Valuation!
            <br />
            <br />
          </p>
          <p className="h5 successTag font-weight-bold text-light text-center">
            Someone will be in touch with your Comparative Market Analysis.
          </p>
        </div>s
      </div>
    );
  }


  render() {
    return (
      <div className="mainContainer">
        <Navbar />
        {this.header()}
      </div>
    );
  }
}

export default Success;
