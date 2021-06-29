import React from "react";
import { Route } from "react-router-dom";
import Todos from "./createtodo";
import ListTodos from "./ListTodos";

export default function App() {
  return (
    <div id="main">
      <h1>Fool's To-Do</h1>
      <Route exact path="/" component={Todos} />
      <ListTodos />
    </div>
  );
}
