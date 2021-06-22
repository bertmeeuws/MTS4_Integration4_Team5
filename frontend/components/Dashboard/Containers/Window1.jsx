import React from "react";
import { Children } from "react";
import styles from "../Containers/Window.module.css";
import Image from "next/image";

export default function Window1({ children, text }) {

  return (
    <div className="game__container">
      <div className="game__top">
        <div className="game__top-link">
          {text ? <p className="title__xs-bold">{text}</p> : ""}
        </div>          
        <div className="game__cross">
          <Image
            src="/assets/img/crossBlack.svg"
            width={25}
            height={25}
            alt="kruisje om kader af te sluiten"
          />
        </div>
      </div>

      <div className="game__info">{children}</div>
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
