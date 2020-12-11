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
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
