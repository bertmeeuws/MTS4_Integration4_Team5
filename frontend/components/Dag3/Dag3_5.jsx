import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag3_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      3.5
      <div className="game-wrapper">
        <p>-20 PENALTY HERE</p>
        <h1 className="title__m-bold">
          Laat likes je humeur niet beïnvloeden, een like zegt helemaal niets
          over hoe je bent.
        </h1>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Naar overzicht
        </button>
      </div>
    </section>
  );
}
