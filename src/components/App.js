import React, { Component } from 'react';
import Navlink from './Navlink';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><Navlink to="/">Home</Navlink></li>
            <li><Navlink to="/about">About</Navlink></li>
            <li><Navlink to="/teachers">Teachers</Navlink></li>
            <li><Navlink to="/courses">Courses</Navlink></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
