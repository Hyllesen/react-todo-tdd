import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState("");

  function addTodo() {
    setTodos([...todos, { title: currentTodo, id: nanoid() }]);
    setCurrentTodo("");
  }

  return (
    <div className="App">
      <input
        type="text"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        placeholder="Enter todo item"
      />
      <button onClick={() => addTodo()}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            data-testid="check-todo"
            onClick={() => {
              changeTodoDoneStatus(todo.id);
            }}
          />
          {todo.editing ? (
            <button
              onClick={() => {
                saveTodo();
              }}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                setEditStatusOfTodo(todo.id);
              }}
            >
              Edit
            </button>
          )}

          <button
            onClick={() => {
              const filteredTodos = todos.filter((t) => t.id !== todo.id);
              setTodos(filteredTodos);
            }}
          >
            Delete
          </button>
          {todo.editing ? (
            <input
              type="text"
              value={editingTodo}
              onChange={(e) => {
                setEditingTodo(e.target.value);
              }}
            />
          ) : (
            <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
              {todo.title}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  function setEditStatusOfTodo(id) {
    const editingTodos = todos.map((t) => {
      t.editing = false;
      if (t.id === id) {
        t.editing = true;
        setEditingTodo(t.title);
      }
      return t;
    });
    setTodos(editingTodos);
  }

  function saveTodo() {
    const editedTodos = todos.map((t) => {
      if (t.editing) {
        t.title = editingTodo;
        setEditingTodo("");
        t.editing = false;
      }
      return t;
    });
    setTodos(editedTodos);
  }

  function changeTodoDoneStatus(id) {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }
      return t;
    });
    setTodos(newTodos);
  }
}

export default App;
