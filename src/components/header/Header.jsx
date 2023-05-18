import React from "react";
import "./header.css";

const Header = ({ toggleLogin }) => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <ul className="header__wrapper">
        <button className="header__login-button" onClick={toggleLogin}>
          Войти
        </button>
        <a className="header__basket"></a>
      </ul>
    </header>
  );
};

export default Header;
