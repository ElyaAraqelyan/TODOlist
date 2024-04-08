import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <NavLink className={styles.logo} to="*">
          HABBITS FOR YOU
        </NavLink>
        <NavLink to="*">Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
