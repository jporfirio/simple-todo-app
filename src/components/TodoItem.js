import React from "react";

function TodoItem({ todo, handleChangeProps, deleteTodoProps }) {
  const { completed, id, title } = todo;

  return (
    <label>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
        <span className={completed ? "completed" : ""} htmlFor="">
          {title}
        </span>
      </li>
    </label>
  );
}

export default TodoItem;
