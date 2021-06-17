import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag3_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      3.1
      <div className="game-wrapper">
        <h1 className="title__m-bold">FOTO HIER</h1>
        <p>Kareltje en 2 anderen vinden dit leuk</p>
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
