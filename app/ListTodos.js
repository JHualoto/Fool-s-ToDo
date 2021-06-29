import React, { useState, useEffect } from "react";
import axios from "axios";
import EditTodo from "./EditTodo";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const res = await axios.get("/api/todo");
    setTodos(res.data);
  }

  async function deleteTodo(id) {
    try {
      const res = await axios.delete(`/api/todo/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (e) {
      console.log("ERROR:", e);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Assignee</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.taskName}</td>
              <td>{todo.assignee}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
