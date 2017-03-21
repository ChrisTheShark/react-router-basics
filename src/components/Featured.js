import React from 'react';
import Teachers from '../data/teachers';

const Featured = (props) => {
  let teacher = Teachers[props.params.name];
  return (
    <div className="main-content">
      <h2>Featured: </h2>
      <img className="teacher-img" src={teacher.img_src} />
      <p>Introducing <strong>{ props.params.name }</strong>, a teacher who loves teaching courses about <strong>{ props.params.topic }</strong>!</p>
    </div>
  );
}

export default Featured;
