import React from "react";
import TodoItem from "./TodoItem";
import { useTodoListContext } from "./useTodoList";

function TodosList() {
  const { todos, handleChange, delTodo } = useTodoListContext();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      ))}
    </div>
  );
}

export default TodosList;
