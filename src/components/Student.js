import React from "react";

const Student = (props) => (
  <div className="student">
    <p className="student__text">{props.count}. {props.studentText}</p>
    <button
      className="button button--remove-student"
      onClick={(e) => {
        props.handleDeleteStudent(props.studentText);
      }}
    >
      X
    </button>
  </div>
);

export default Student;