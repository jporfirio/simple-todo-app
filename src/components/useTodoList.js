import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TODOS = [
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Setup development environment",
    completed: true,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Develop website and add content",
    completed: false,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false,
  },
];

export default function useTodoList() {
  const [todos, setTodos] = useState(TODOS);
  const [showCompleted, setCompleted] = useState(false);
  const toggleCompleted = () => setCompleted((c) => !c);

  const filteredTodos = useMemo(
    () => (showCompleted ? todos : todos.filter((todo) => !todo.completed)),
    [todos, showCompleted]
  );

  const handleChange = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  return {
    todos: filteredTodos,
    handleChange,
    delTodo,
    addTodoItem,
    toggleCompleted,
    showCompleted,
  };
}
