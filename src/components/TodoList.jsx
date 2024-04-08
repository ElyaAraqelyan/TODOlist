import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onChange, onInput }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          onInput={onInput}
          onChange={onChange}
          key={todo.id}
          onDelete={onDelete}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
