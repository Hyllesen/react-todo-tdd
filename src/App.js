import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodos([...todos, { title: e.target.value }]);
          }
        }}
        placeholder="Enter todo item"
      />
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
