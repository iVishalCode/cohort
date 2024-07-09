import React, { Fragment } from "react";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("My name is vishal");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <Fragment>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Vishal"></Header>
    </Fragment>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
