import React, { Fragment } from "react";
import { useState } from "react";
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "go to gym today",
//     },
//     {
//       id: 2,
//       title: "eat food",
//       description: "eat food",
//     },
//     {
//       id: 3,
//       title: "go to class",
//       description: "go to class today",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: 4,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);

//     setTodos(newTodos);
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add Todo</button>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <div>hi there</div>
      </CardWrapper>
      <CardWrapper>
        <div>hi there</div>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>{children}</div>
  );
}
function TextComponent() {
  return <div>hello how are you</div>;
}

export default App;
