import React, { useEffect } from "react";
import styles from "./SwipeToUnlock.module.css";
import Image from "next/image";

export default function SwipeToUnlock() {
  return (
    <div class="container">
      <div className={styles.outer} id="outer">
        <div className={styles.lock} id="lock">
          <Image src="/assets/swipearrow.svg" width={17.91} height={17.91} />
        </div>
      </div>
    </div>
  );
}
