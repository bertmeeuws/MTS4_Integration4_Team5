import React from "react";
import { Children } from "react";
import styles from "../Containers/Window.module.css";
import Image from "next/image";

export default function Window2({ children, text }) {

  return (
    <div className="game__container">
      <div className="game__top">
        <div className="top__round-container">
          <div className="top__round-turquoise"></div>
          <div className="top__round-yellow"></div>
          <div className="top__round-red"></div>
        </div>         
      </div>

      <div className="game__info-new">{children}</div>
    </div>
  );
  
  
  
  
  
  
  
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={`${styles.circle} ${styles.blue}`}></div>
        <div className={`${styles.circle} ${styles.yellow}`}></div>
        <div className={`${styles.circle} ${styles.red}`}></div>
        {text ? <p className="p-small">{text}</p> : ""}
      </div>
      <div>{children}</div>
    </div>
  );
}
