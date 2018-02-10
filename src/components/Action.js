import React from "react";

const Action = (props) => (
  <div className="action">
    <button 
      className="button action-button"
      disabled={!props.hasStudents}
      onClick={props.handlePickStudent}>Select next student</button>
  </div>
);

export default Action;