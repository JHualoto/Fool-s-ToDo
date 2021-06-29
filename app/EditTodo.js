import axios from "axios";
import React, { useState } from "react";

function EditTodo({ todo }) {
  const [taskName, settaskName] = useState(todo.taskName);

  async function editText(id) {
    try {
      const newTask = { taskName };

      const res = await axios.put(`/api/todo/${id}`, newTask);
      window.location = "/";
    } catch (e) {
      console.log("ERROR:", e);
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${todo.id}`}
        onClick={() => settaskName(todo.taskName)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => settaskName(todo.taskName)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={(e) => settaskName(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(todo.id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => settaskName(todo.taskName)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;
