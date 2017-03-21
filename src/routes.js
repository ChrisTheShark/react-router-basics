import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRedirect } from "react-router";

// Components
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import NotFound from "./components/NotFound";
import Featured from "./components/Featured";

import CourseComponent from "./components/courses/CourseComponent";
import CourseList from "./data/courses";

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="courses" component={Courses} >
        <IndexRedirect to="html"/>
        <Route path="css" component={CourseComponent} data={CourseList.CSS} />
        <Route path="html" component={CourseComponent} data={CourseList.HTML} />
        <Route path="javascript" component={CourseComponent} data={CourseList.JS} />
      </Route>
      <Route path="teachers" component={Teachers} />
      <Route path="featured/:topic/:name" component={Featured} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
