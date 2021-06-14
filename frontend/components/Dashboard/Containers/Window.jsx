import React from "react";
import { Children } from "react";
import styles from "../Containers/Window.module.css";

export default function Window({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={`${styles.circle} ${styles.blue}`}></div>
        <div className={`${styles.circle} ${styles.yellow}`}></div>
        <div className={`${styles.circle} ${styles.red}`}></div>
      </div>
      <div className={styles.safezone}>{children}</div>
    </div>
  );
}
