import React, { Fragment, useState } from "react";
import Todo from "../../ExplainationContainer/Todo";
import List from "./List";

export default function TodoContainer() {
  const [todos, setTodo] = useState([]);
  let getUserTerm = todo => {
    let newTodos = [...todos,todo]
    setTodo(newTodos);
  };
  return (
    <Fragment>
      <h3 className="container">Todo Using Hooks ..</h3>
      <Todo getUserTerm={getUserTerm} />
      <List todos={todos} />
    </Fragment>
  );
}
