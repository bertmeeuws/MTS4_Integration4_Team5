import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "./ProgressBar";

export default function Onboarding4() {
  const previousRoute = useStoreActions((actions) => actions.previousRoute);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container onboarding-1">
      <NavBar percent={8} />
      <div className="introduction-container">
        <h1 className="title__m-bold margin-top align-center">
          <marker
            style={{ backgroundColor: "var(--white)" }}
            className="mark-yellow"
          >
            Personaliseer
          </marker>
          je eigen account
        </h1>
        <p className="onboarding2__text align-center">
          Verander de kleuren van je account zoals jij het wil!
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
            className="button__primary text__m-bold button__game-next"
            onClick={(e) => {
              nextRoute();
            }}
          >
            Start BuddyGram op
          </button>
        </div>
        <ProgressBar step={4} />
      </div>
    </section>
  );
}
