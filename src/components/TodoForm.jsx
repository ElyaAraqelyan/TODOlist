import React, { useState } from "react";
import MyInput from "../UI/MyInput";
import styles from "../styles/TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
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
