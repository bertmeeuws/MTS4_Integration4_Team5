import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="section__day5_1 center-middle background-yellow stretch-container">
      5.1 Leerkracht foto
      <Background />
      <div className="game-wrapper">
        <p></p>
        <button
          className="button__primary"
          onClick={(e) => nextRoute()}
        >
          Bekijk de foto
        </button>
      </div>
    </section>
  );
}
