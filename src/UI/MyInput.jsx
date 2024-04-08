import React from "react";
import styles from "./MyInput.module.css";

const MyInput = ({ ...props }) => {
  return <input type="text" className={styles.MyInput} {...props} />;
};

export default MyInput;
