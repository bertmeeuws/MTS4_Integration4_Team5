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
        <p style={{ color: "var(--blue)" }} className="text__m-bold">
          1/3 inschatten
        </p>
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
          We nemen je mee op een fictief avontuur met het sociale media platform
          genaamd ‘BuddyGram’.
        </p>
      </div>
      <div className="onboarding-progress-container">
        <div>
          <button
            className="button__primary text__m-bold button__game-next"
            onClick={(e) => nextRoute()}
          >
            Ontdek hoe je volgers kan krijgen
          </button>
        </div>
      </div>
      <ProgressBar step={1} />
    </section>
  );
}
