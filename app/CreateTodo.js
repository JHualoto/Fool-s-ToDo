import React, { useState } from "react";
import TodoForm from "./TodoForm";
import axios from "axios";

function CreateTodo() {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");

  function handleChange(e) {
    if (e.target.name === "taskName") {
      setTaskName(e.target.value);
    }
    if (e.target.name === "assignee") {
      setAssignee(e.target.value);
    }
  }
  async function handleSubmit(e) {
    if (taskName.length === 0 && assignee.length === 0) {
      return alert("Don't leave this area blank!");
    }
    try {
      e.preventDefault();

      const res = await axios.post("/api/todo/", {
        taskName: taskName,
        assignee: assignee,
      });
      setTaskName("");
      setAssignee("");
    } catch (e) {
      console.log("ERROR:", e);
    }
  }

  return (
    <>
      <TodoForm
        onChange={handleChange}
        handleSubmit={handleSubmit}
        taskName={taskName}
        assignee={assignee}
      />
    </>
  );
}

export default CreateTodo;
