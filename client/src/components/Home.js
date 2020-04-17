/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import {
  FaCheck,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaSms,
  FaLevelDownAlt,
  FaMoneyBillAlt,
  FaFastForward,
  FaTruck,
  FaArrowAltCircleDown,
  FaArrowDown,
} from 'react-icons/fa';
import ReactPixel from 'react-facebook-pixel';
import PlacesAutocomplete from 'react-places-autocomplete';
import Navbar from './Navbar';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirect2: false,
      address: '',
      places: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    ReactPixel.init('track', 'ViewContent', {
      value: 'Viewer Lead',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      redirect2: true,
    });
  }

  handleSubmitForm2(e) {
    e.preventDefault();
    axios.post('/lead', {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: this.state.address,
    })
      .then((data) => {
        if (data.status === 200) {
          console.log('Success');
          this.setState({
            redirect: true,
          });
        } else {
          alert('404 ERROR SENDING DATA');
        }
      })
      .catch(err => console.log(err));
  }

  handleChange(address) {
    this.setState({ address });
  }

  handleSelect(address) {
    this.setState({ address });
    this.props.changeAddress(address);
  }

  bannerForm2() {
    return (
      <div className="bannerContainer2">
        <p className="h1 text-center font-weight-bold">How Much Is Your Home Worth?</p>
        <form onSubmit={this.handleSubmitForm2.bind(this)} id="getQuoteForm2">
          <div className="formHousing">
            <br />
            <div className="row">
              <div className="col">
                <label className="col-form-label-lg font-weight-bold">First Name</label>
                <input type="text" id="firstName" className="form-control form-control-lg" placeholder="John" required />
              </div>
              <div className="col">
                <label className="col-form-label-lg font-weight-bold">Last Name</label>
                <input type="text" id="lastName" className="form-control form-control-lg" placeholder="Doe" required />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label className="col-form-label-lg font-weight-bold">Phone Number</label>
                <input type="tel" id="phone" className="form-control form-control-lg" placeholder="12095555555" pattern=".{10,11}" required title="Phone Mumber MUST Include Area Code" required />
              </div>
              <div className="col">
                <label className="col-form-label-lg font-weight-bold">Email Address</label>
                <input type="email" id="email" className="form-control form-control-lg" placeholder="JohnDoe@Gmail.com" required />
              </div>
            </div>
            <br />
            <label className="col-form-label-lg font-weight-bold">Address</label>

            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange.bind(this)}
              onSelect={this.handleSelect.bind(this)}
            >
              {({
                getInputProps, suggestions, getSuggestionItemProps, loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: '1234 Main St. Modesto, CA',
                      className: 'location-search-input form-control form-control-lg',
                    })}
                  />
                  <div className="autocomplete-dropdown-container addyDropdown">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active addy'
                        : 'suggestion-item addy';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#d3d3d3', cursor: 'pointer' }
                        : { backgroundColor: 'white', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>

            <br />
            <br />
            <div className="homeButton">
              <button type="submit" className="btn btn-lg">Get Your Home Value Now!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  


  render() {
    if (this.state.redirect2 === true) {
      return (
        <Redirect to="/contact" />
      );
    }
    if (this.state.redirect === false) {
      return (
        <div classname="mainContainer">
          <Navbar />
          {this.bannerForm2()}
        </div>
      );
    }
    return <Redirect to="/success" />;
  }
}


export default Home;
