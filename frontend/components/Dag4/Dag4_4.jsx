import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="section__day4 center-middle background-yellow stretch-container">
      <p className="hidden">4.4</p>
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox text-center">
          Berichten die afkomstig zijn van een vreemd e-mailadres of username
          met een mysterieus bericht altijd meteen verwijderen.
        </h1>

        <button
          className="button__primary"
          onClick={(e) => nextRoute()}
        >
          Naar overzicht
        </button>
      </div>
    </section>
  );
}
