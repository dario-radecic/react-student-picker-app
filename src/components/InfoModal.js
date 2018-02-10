import React from "react";
import Modal from "react-modal";

const InfoModal = (props) => (
  <Modal
    isOpen={!!props.infoModalShown}
    onRequestClose={props.handleCloseInfoModal}
    contentLabel="About the app"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">About the app</h3>
    <p>The app was created as a simple project to demonstrate some basic features of React.</p>
    <button className="button button--modal-button" onClick={props.handleCloseInfoModal}>Close</button>
  </Modal>
);

export default InfoModal;