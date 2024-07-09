import React, { Fragment, useState } from "react";

function App() {
  const { title, setTitle } = useState("My name is Vishal");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <Fragment>
      <button onClick={updateTitle}>Update the title</button>
      <header title={title}> Vishal</header>
      <header title="Vishal"> Vishal</header>
    </Fragment>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}
export default App;
