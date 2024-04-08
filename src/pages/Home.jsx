import React from "react";
import styles from "../styles/Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.frame}>
        <h1 className={styles.h1}>
          CREATE YOUR <span>HABITS</span>
        </h1>
        <p className={styles.p}>
          You can’t get rid of procrastination? It’s time to take your life into
          your own hands! Create habits, and we will help you with this!
        </p>
        <NavLink to={"/todos"}>
          <button className={styles.button}>Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
