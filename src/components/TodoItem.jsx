import "./TodoItem.css";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? "todo-item completed" : "todo-item"}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as done`}
      />
      <span>{todo.text}</span>
      <button className="delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
