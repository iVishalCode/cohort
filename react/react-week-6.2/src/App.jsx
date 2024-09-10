import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState(0);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);
  return (
    <>
      {todos.map((todo) => (
        <Todo title={todos.title} descripation={todos.descripation} />
      ))}
    </>
  );
}

function Todo({ title, descripation }) {
  return (
    <div>
      <h1>{title}</h1>
      {descripation}
    </div>
  );
}

export default App;
