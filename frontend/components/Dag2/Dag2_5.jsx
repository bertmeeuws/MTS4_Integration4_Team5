import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag2_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="center-middle background-yellow stretch-container">
      <p className="hidden">2.5</p>
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox text-center">
          Vergeet nooit uit te loggen op sociale media als je een openbaar
          toestel gebruikt hebt.
        </h1>

        <button
          className="button__primary"
          onClick={(e) => nextRoute()}>
          Naar overzicht
        </button>
        
      </div>
      <Background />
    </section>
  );
}
