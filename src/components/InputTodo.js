import React, { useState, useRef, useCallback } from "react";
import { useTodoListContext } from "./useTodoList";

function InputTodo() {
  const { addTodoItem } = useTodoListContext();

  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTodoItem(title);
      setTitle("");
      inputRef.current.focus();
    },
    [title, addTodoItem]
  );

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        ref={inputRef}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
}

export default InputTodo;
