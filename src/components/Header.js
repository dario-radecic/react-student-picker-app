import React from "react";

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    <button className="button header__button" onClick={props.handleShowInfoModal}>INFO</button>
  </div>
);

export default Header;