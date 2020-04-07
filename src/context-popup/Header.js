import React, { Component } from "react";
import { Consumer } from "./context/context";

import style from "./Header.module.scss";

const Header = () => (
  <Consumer>
    {({ toggleLogin }) => (
      <div className={style.header}>
        <a href="#" onClick={toggleLogin}>
          Login
        </a>
      </div>
    )}
  </Consumer>
);

export default Header;
