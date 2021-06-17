import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_13() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      1.13
      <button
        className="button__primary text__m-bold button__game-next"
        onClick={(e) => nextRoute()}
      >
        Volgende
      </button>
    </section>
  );
}
