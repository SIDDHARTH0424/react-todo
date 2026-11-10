# React To-Do App

The earlier vanilla JavaScript to-do app, rebuilt with React and Vite.

## Features
- Add and delete tasks
- Mark tasks complete
- Filter: All / Active / Completed
- Tasks saved in localStorage, so they survive a refresh

## Component structure
```
App                  state: todos (saved), filter
├── TodoForm         state: input text; props: onAdd
├── FilterBar        props: current, onChange
└── TodoList         props: todos, onToggle, onDelete
    └── TodoItem     props: todo, onToggle, onDelete
```
`src/hooks/useLocalStorage.js` is a small custom hook that works like `useState` but saves to localStorage.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
```

Live: https://siddharth0424.github.io/react-todo/
