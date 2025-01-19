import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import useTodoList from "./useTodoList";

function TodoContainer() {
  const { todos, addTodoItem, handleChange, delTodo } = useTodoList();

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
}

export default TodoContainer;
