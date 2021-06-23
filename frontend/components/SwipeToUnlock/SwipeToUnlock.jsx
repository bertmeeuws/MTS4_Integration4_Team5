import React, { useEffect, useRef, Componen, useState } from "react";
import styles from "./SwipeToUnlock.module.css";
import Image from "next/image";
import Draggable from "react-draggable";
import gsap, { TweenLite, Power3 } from "gsap";

export default function SwipeToUnlock({ action, end }) {
  const [start, setStart] = useState(null);
  const [cantMove, setCantMove] = useState(false);
  const [animated, setAnimated] = useState(false);

  /*
  return (
    <div class="center-xy">
      <h1>Slide to Unlock</h1>
      <Draggable axis="both" cancel="input, textarea, span, label">
        <div>test</div>
      </Draggable>
    </div>
  );
  */

  const handleStop = (e) => {
    console.log("Stop");
    console.log(e);
    const x = e.clientX;
    console.log(x);
    action();

    if (x > 620) {
      console.log("Ver genoeg");

      TweenLite.to("#outer", 0.3, {
        opacity: 0,
        ease: Power3.easeInOut,
      });
      TweenLite.to("#lock", 1, {
        translateX: "381px",
        ease: Power3.easeInOut,
        onComplete: action,
      });
    } else {
      TweenLite.to("#lock", 1, {
        translateX: "10px",
        ease: Power3.easeInOut,
      });
      setAnimated(true);
    }
  };

  const handleStart = (e) => {};

  return (
    <div className="container">
      <div className="outer" id="outer">
        <p id="unlock-text" className="title__s-bold">
          {end ? "Game afsluiten" : "Swipe to unlock"}
        </p>
        <Draggable
          bounds="parent"
          axis="x"
          onStart={handleStart}
          onStop={handleStop}
        >
          <div className="lock" id="lock">
            <img
              src="/assets/swipearrow.svg"
              width="17.91"
              height="17.91"
              alt=""
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}
