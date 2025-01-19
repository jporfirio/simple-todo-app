import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { TodoContextProvider } from "./useTodoList";

function TodoContainer() {
  return (
    <TodoContextProvider>
      <div className="container">
        <Header />
        <InputTodo />
        <TodosList />
      </div>
    </TodoContextProvider>
  );
}

export default TodoContainer;
