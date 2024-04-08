import React, { useState } from "react";
import styles from "../styles/Item.module.css";

const TodoItem = ({ todo, onDelete, onChange, onInput }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    onChange({
      ...todo,
      isCompleted: e.target.checked,
    });
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  const handleParagraphClick = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    console.log(e.target.innerHTML);
    onInput(todo.id, e.target.innerHTML);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className={styles.Item}>
      <label>
        <input
          checked={todo.isCompleted}
          onChange={handleChange}
          type="checkbox"
          className={styles["input-checkbox"]}
        />
        <span className={styles["custom-checkbox"]}></span>
        <p
          onInput={handleInput}
          onBlur={handleClick}
          contentEditable={isEdit}
          suppressContentEditableWarning="false"
          onKeyDown={handleKeyDown}
          onClick={handleParagraphClick}
          className={styles.text}
          style={todo.isCompleted ? { textDecoration: "line-through" } : {}}
        >
          {todo.title}
        </p>
        <button className={styles.btn} onClick={() => onDelete(todo.id)}>
          X
        </button>
        <button onClick={handleClick} className={styles.button}>
          {isEdit ? "Save" : "Edit"}
        </button>
      </label>
    </div>
  );
};

export default TodoItem;
