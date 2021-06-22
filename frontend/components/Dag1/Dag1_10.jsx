import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_10() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="center-middle background-yellow stretch-container">
      <Background />
      <p className="hidden"> 1.10</p>
      <div className="game-wrapper">
        <h1 className="title__m-bold">?????</h1>
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
