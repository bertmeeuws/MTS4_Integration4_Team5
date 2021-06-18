import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "./ProgressBar";

export default function Onboarding1({ data }) {
  console.log(data);

  const previousRoute = useStoreActions((actions) => actions.previousRoute);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container onboarding-1">
      <NavBar percent={2} />
      <div className="onboarding-content-container">
        <h1 className="title__m-bold margin-top align-center">
          <marker
            style={{ backgroundColor: "var(--white)" }}
            className="mark-yellow"
          >
            Elke dag
          </marker>
          kan er wel iets gebeuren
        </h1>
        <p className="text__m-normal align-center">
          Elke dag krijg je een situatie voorgeschoteld die je op het internet
          kan ervaren.
        </p>
      </div>
      <div className="onboarding-progress-container">
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Ontdek hoe je volgers kan krijgen
        </button>
        <ProgressBar step={1} />
      </div>
    </section>
  );
}
