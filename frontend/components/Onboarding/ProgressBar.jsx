import React from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ step }) {
  
  return (
    <div className={styles.container}>
        
        <span className="title__xs-bold">
          scenarios
          <div className={`progressbar_box ${step === 1 ? "progressbar_box--active" : ""}`}></div>
        </span>

        <span className="title__xs-bold">
          + volgers
          <div className={`progressbar_box ${step === 2 ? "progressbar_box--active" : ""}`}></div>
        </span>

        <span className="title__xs-bold">
          - volgers
          <div className={`progressbar_box ${step === 3 ? "progressbar_box--active" : ""}`}></div>
        </span>

    </div>
  );
}
