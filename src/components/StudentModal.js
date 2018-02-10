import React from "react";
import Modal from "react-modal";

const StudentModal = (props) => (
  <Modal
    isOpen={!!props.selectedStudent}
    onRequestClose={props.handleClearSelectedStudent}
    contentLabel="Selected Student"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Student</h3>
    {props.selectedStudent && <p className="modal__body">{props.selectedStudent}</p>}
    <button className="button button--modal-button" onClick={props.handleClearSelectedStudent}>Okay</button>
  </Modal>
);

export default StudentModal;