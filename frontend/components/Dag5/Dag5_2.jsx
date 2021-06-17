import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      5.2
      <Background />

      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          Wat hebben we deze week bijgeleerd?
        </h1>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Swipe om alles tips te zien
        </button>
      </div>
    </section>
  );
}
