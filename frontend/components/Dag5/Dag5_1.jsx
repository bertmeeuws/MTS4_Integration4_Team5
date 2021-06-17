import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag5_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      5.1 Leerkracht foto
      <div className="game-wrapper">
        <p></p>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Bekijk de foto
        </button>
      </div>
    </section>
  );
}
