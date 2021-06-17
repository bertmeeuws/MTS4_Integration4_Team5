import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_12() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      1.12
      <div className="game-wrapper">
        <h1 className="title__m-bold">OVERZICHT LIJSTJE</h1>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Volgende
        </button>
      </div>
    </section>
  );
}
