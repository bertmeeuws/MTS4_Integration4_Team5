import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      4.4
      <Background />

      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          Berichten die afkomstig zijn van een vreemd e-mailadres of username
          met een mysterieus bericht altijd meteen verwijderen.
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
