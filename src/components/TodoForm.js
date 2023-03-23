import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    const newTodo = {
      id: uuid(),
      task: todo,
      completed: false,
    };
    addTodo(newTodo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="todoInput">Add a new task:</label>
        <input
          type="text"
          className="form-control"
          id="todoInput"
          placeholder="Enter task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
