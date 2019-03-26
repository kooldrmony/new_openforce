//This component is the header of the application showing the title

import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Ron Swanson Swag!</h1>
    <h2>
      Click on the button below to get your daily dose of Swanson Swag!
    </h2>
  </header>
);

export default Header;
