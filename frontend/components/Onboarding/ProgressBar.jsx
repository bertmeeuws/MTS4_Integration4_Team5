import React from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ step }) {
  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        <li className={styles.item}>
          scenarios
          <div
            className={`progressbar_box ${
              step === 1 ? "progressbar_box--active" : ""
            }`}
          ></div>
        </li>
        <li className={styles.item}>
          + volgers
          <div
            className={`progressbar_box ${
              step === 2 ? "progressbar_box--active" : ""
            }`}
          ></div>
        </li>
        <li className={styles.item}>
          - volgers
          <div
            className={`progressbar_box ${
              step === 3 ? "progressbar_box--active" : ""
            }`}
          ></div>
        </li>
        <li className={styles.item}>
          kleuren
          <div
            className={`progressbar_box ${
              step === 4 ? "progressbar_box--active" : ""
            }`}
          ></div>
        </li>
      </ul>
    </div>
  );
}
