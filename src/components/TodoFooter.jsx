import React from "react";
import styles from "../styles/Home.module.css";

const TodoFooter = ({ todos, onClearCompleted }) => {
  const doneTodos = todos.filter((todo) => todo.isCompleted).length;
  const clearCompleted = () => {
    onClearCompleted();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className={styles.text}>
        {doneTodos}/{todos.length} completed
      </p>
      <button className={styles.button} onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;
