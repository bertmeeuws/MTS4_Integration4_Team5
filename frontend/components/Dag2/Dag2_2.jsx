import React from "react";
import Background from "../Background/Background";
import { useStoreActions } from "easy-peasy";

export default function Dag2_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      2.2
      <div className="game-wrapper">
        <p>
          Ik had gisteren alle antwoorden van het examen in mijn pennenzak
          gestopt.
        </p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Post behouden
        </button>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Post verwijderen
        </button>
      </div>
    </section>
  );
}
