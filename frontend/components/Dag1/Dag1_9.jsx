import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_9({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="day__middle-center">
      <div className="game-wrapper">
        
        <h1 className="title__m-bold game__textBox">Tijd om deze dag af te sluiten. Vergeet je niet af te melden</h1>

        <button
          className="button__primary"
          onClick={(e) => nextRoute()}>
          Afmelden van BuddyGram
        </button>

      </div>
    </section>
  );
}
