import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodos([...todos, { title: e.target.value, id: nanoid() }]);
          }
        }}
        placeholder="Enter todo item"
      />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
