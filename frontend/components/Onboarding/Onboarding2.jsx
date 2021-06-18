import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "./ProgressBar";

export default function Onboarding2() {
  const previousRoute = useStoreActions((actions) => actions.previousRoute);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container onboarding-1">
      <NavBar percent={4} />
      <div className="onboarding-content-container">
        <h1 className="title__m-bold margin-top align-center">
          Verdien volgers
        </h1>
        <p className="align-center">
          Schat de situatie zo goed mogelijk in en verdien zo veel mogelijk
          volgers.
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
            Ontdek hoe je volgers verliest
          </button>

          <ProgressBar step={2} />
        </div>
      </div>
    </section>
  );
}
