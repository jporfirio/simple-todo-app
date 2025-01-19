import React from "react";

const Header = ({ children }) => (
  <header className="header">
    <h1>Simple Todo App</h1>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>Please add to-dos item(s) through the input field</p>

      {children}
    </div>
  </header>
);

export default Header;
