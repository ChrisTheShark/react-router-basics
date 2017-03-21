import React from 'react';
import TeachersList from '../data/teachers';

const Teachers = () => {
  let teachers = Object.keys(TeachersList).map(key => {
    let teacher = TeachersList[key];
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} />
        <h3>{name}</h3>
        <p>{teacher.bio}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">
        {teachers}
      </ul>
    </div>
  );
}

export default Teachers;
