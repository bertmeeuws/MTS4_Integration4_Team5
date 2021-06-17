import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      4.1
      <Background />

      <div className="game-wrapper">
        <p>
          Hey leuk je te ontmoeten! Wil je me beter leren kennen? Druk dan op
          het linkje!
        </p>
        <p>http://like.me/qmsd/id=4/?php.rs</p>
        <button onClick={(e) => nextRoute()}>Volgende</button>
      </div>
    </section>
  );
}
