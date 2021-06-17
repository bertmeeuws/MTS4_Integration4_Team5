import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <div className="game-wrapper">
        <h1 className="title__m-bold">Nieuwe dag, nieuwe kansen</h1>
        <p className="text__m-normal game__upload-subtext">
          Het is dinsdag 7u30 ‘s ochtends. Klaar voor een nieuwe dag! Laten we
          snel eens BuddyGram checken!
        </p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Bekijk de feed
        </button>
      </div>
    </section>
  );
}
