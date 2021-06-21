import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import SwipeToUnlock from "../SwipeToUnlock/SwipeToUnlock.jsx";

export default function Reflectie() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          Tijd voor een reflectiegesprek met de leerkracht.
        </h1>

        <SwipeToUnlock action={nextRoute} />
      </div>
    </section>
  );
}
