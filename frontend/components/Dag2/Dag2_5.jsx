import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.5
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox text-center">
          Vergeet nooit uit te loggen op sociale media als je een openbaar
          toestel gebruikt hebt.
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
