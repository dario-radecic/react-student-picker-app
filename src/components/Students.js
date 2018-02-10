import React from "react";
import Student from "./Student";

const Students = (props) => (
  <div className="students">
    <div className="widget-header">
      <h3 className="widget-header__title">Your Students</h3>
      <button className="button button--remove-all-students" onClick={props.handleDeleteStudents}>Remove All</button>
    </div>
    {props.students.length === 0 && <p>Please add some students to get started!</p>}
    {
      props.students.map((student, index) => (
        <Student 
          key={student}
          studentText={student}
          count={index + 1}
          handleDeleteStudent={props.handleDeleteStudent}
        />
      ))
    }
  </div>
);

export default Students;