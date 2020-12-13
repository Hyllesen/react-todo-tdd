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
              const newTodos = todos.map((t) => {
                if (t.id === todo.id) {
                  todo.done = !todo.done;
                }
                return t;
              });
              setTodos(newTodos);
            }}
          />
          {todo.editing ? (
            <button
              onClick={() => {
                const editedTodos = todos.map((t) => {
                  if (t.editing) {
                    t.title = editingTodo;
                    setEditingTodo("");
                    t.editing = false;
                  }
                  return t;
                });
                setTodos(editedTodos);
              }}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                const editingTodos = todos.map((t) => {
                  t.editing = false;
                  if (t.id === todo.id) {
                    t.editing = true;
                    setEditingTodo(t.title);
                  }
                  return t;
                });
                setTodos(editingTodos);
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
}

export default App;
