import React from "react";
import { useTodoListContext } from "./useTodoList";

const Header = () => {
  const { toggleCompleted, showCompleted } = useTodoListContext();

  return (
    <header className="header">
      <h1>Simple Todo App</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Please add to-dos item(s) through the input field</p>

        <label>
          Show completed
          <input
            type="checkbox"
            style={{ marginLeft: "15px" }}
            checked={showCompleted}
            onClick={toggleCompleted}
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
