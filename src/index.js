// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

// Render
render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="courses" component={Courses} />
    <Route path="teachers" component={Teachers} />
  </Router>
), document.getElementById('root'));
