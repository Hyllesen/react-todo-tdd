import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

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
          <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
