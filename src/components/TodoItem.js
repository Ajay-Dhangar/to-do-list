import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, editTodo, toggleCompleted }) {
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    editTodo(todo.id, task);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTask(todo.task);
    setEditMode(false);
  };

  const handleCompleted = () => {
    toggleCompleted(todo.id);
  };

  return (
    <li className="list-group-item">
      {editMode ? (
        <>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-sm btn-success mx-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-sm btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.task}
          </span>
          <button className="btn btn-sm btn-primary mx-2" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-sm btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <input
            type="checkbox"
            className="ml-3"
            checked={todo.completed}
            onChange={handleCompleted}
          />
        </>
      )}
    </li>
  );
}

export default TodoItem;
