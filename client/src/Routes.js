/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Route, HashRouter, BrowserRouter, Redirect, Router,
} from 'react-router-dom';
import Home from './components/Home';
import Success from './components/Success';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  changeAddress(address) {
    this.setState({
      address,
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Route
              path="/"
              exact
              strict
              render={() => (
                <Home changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/contact"
              exact
              strict
              render={() => (
                <Contact address={this.state.address} />
              )}
            />
          </div>
          <div>
            <Route
              path="/success"
              exact
              strict
              render={() => (
                <Success />
              )}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
