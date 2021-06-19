import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_9({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="center-middle background-yellow stretch-container">
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          Tijd om deze dag af te sluiten. Vergeet je niet af te melden
        </h1>
        <p className="hidden">1.9</p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Afmelden van BuddyGram
        </button>
      </div>
    </section>
  );
}
