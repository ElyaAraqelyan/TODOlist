import React, { useState } from "react";
import MyInput from "../UI/MyInput";
import styles from "../styles/TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText !== "") {
      onAdd(trimmedText);
      setText("");
    } else {
      alert("The input line is empty. Please, check it and write right tasks!");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "inline-block", position: "relative" }}>
          <MyInput placeholder="Todo..." value={text} onChange={handleChange} />
          <button className={styles.btn} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
