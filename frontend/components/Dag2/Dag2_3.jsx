import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.3
      <div className="game-wrapper">
        <p>
          Ik had gisteren alle antwoorden van het examen in mijn pennenzak
          gestopt.
        </p>
        <p>Dat ga ik tegen de leerkracht vertellen.</p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Feed afsluiten
        </button>
      </div>
    </section>
  );
}
