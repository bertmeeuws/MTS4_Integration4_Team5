import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "./ProgressBar";

export default function Onboarding3() {
  const previousRoute = useStoreActions((actions) => actions.previousRoute);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container onboarding-1">
      <NavBar percent={6} />
      <div className="onboarding-content-container">
        <p style={{ color: "var(--blue)" }} className="text__m-bold">
          3/3 boooh!
        </p>
        <h1 className="title__m-bold margin-top align-center">
          Verlies volgers
        </h1>
        <p className="onboarding2__text text-center">
          Wanneer je een situatie niet correct inschat verlies je volgers.
        </p>
        <div className="onboarding-progress-container">
          <button
            className="button__secondary text__m-bold button__game-next"
            onClick={(e) => {
              previousRoute();
            }}
          >
            Stap terug
          </button>
          <button
            onClick={(e) => {
              nextRoute();
            }}
            className="button__primary text__m-bold button__game-next"
          >
            Start BuddyGram op
          </button>
        </div>
        <ProgressBar step={3} />
      </div>
    </section>
  );
}
