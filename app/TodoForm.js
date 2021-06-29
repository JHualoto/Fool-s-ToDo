import React from "react";

export default function TodoForm(props) {
  const { taskName, assignee, onChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Task name:</label>
      <input
        type="text"
        name="taskName"
        value={taskName}
        onChange={onChange}
      ></input>
      <label> Assign to:</label>
      <input
        type="text"
        name="assignee"
        value={assignee}
        onChange={onChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
