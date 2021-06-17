import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";

export default function Onboarding2() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  return (
    <section className="introduction background-yellow stretch-container">
      <NavBar percent={4} />
      <div className="introduction-container">
        <h1 className="title__m-bold margin-top align-center">
          Verdien volgers
        </h1>
        <p className="align-center">
          Schat de situatie zo goed mogelijk in en verdien zo veel mogelijk
          volgers.
        </p>
        <div className="introduction-list">
          <button
            className="button__secondary text__m-bold button__game-next"
            onClick={(e) => {
              changeRoute(1);
            }}
          >
            Stap terug
          </button>
          <button
            className="button__primary text__m-bold button__game-next"
            onClick={(e) => {
              changeRoute(3);
            }}
          >
            Ontdek hoe je volgers verliest
          </button>
        </div>
      </div>
    </section>
  );
}
