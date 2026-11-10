import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TodoForm from "./components/TodoForm";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <main className="app">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <FilterBar current={filter} onChange={setFilter} />
      <TodoList
        todos={visibleTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      {visibleTodos.length === 0 && <p className="empty">No tasks here.</p>}
      <p className="counter">
        {remaining} task{remaining === 1 ? "" : "s"} left
      </p>
    </main>
  );
}
