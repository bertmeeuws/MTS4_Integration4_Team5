import React from "react";
import styles from "../ListWindow/ListWindow.module.css";

export default function ListWindow({ children, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={`${styles.circle} ${styles.blue}`}></div>
        <div className={`${styles.circle} ${styles.yellow}`}></div>
        <div className={`${styles.circle} ${styles.red}`}></div>
        {text ? <p className="title__s-bold">{text}</p> : ""}
      </div>
      <div className={styles.safezone}>{children}</div>
    </div>
  );
}
