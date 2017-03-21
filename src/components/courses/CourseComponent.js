import React, { Component } from 'react';

import Course from './Course';

class CourseComponent extends Component {
  render() {
    let courses = this.props.route.data;
    return (
      <div>
        <ul>
          {
            courses.map((course) => {
                return <Course title={course.title}
                             desc={course.description}
                             img={course.img_src}
                             key={course.id} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default CourseComponent;
