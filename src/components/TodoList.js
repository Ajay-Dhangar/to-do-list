import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, editTodo, toggleCompleted }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoList;
