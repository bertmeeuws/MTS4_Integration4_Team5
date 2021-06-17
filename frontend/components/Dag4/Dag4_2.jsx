import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      4.2
      <Background />

      <div className="game-wrapper">
        <p>ERROR 7X -5 volgers elk</p>
        <button onClick={(e) => nextRoute()}>Volgende</button>
      </div>
    </section>
  );
}
