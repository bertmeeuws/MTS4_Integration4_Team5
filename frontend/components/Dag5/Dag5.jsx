import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      5.
      <Background />

      <div className="game-wrapper">
        <div className="game__textBox">
          <h1 className="title__m-bold">
            Mevrouw B. Meeuws heeft een nieuwe foto gepost
          </h1>
          <p>
            Bekijk de nieuwe foto van mevrouw B. Meeuws en reageer met een leuke
            reactie.
          </p>
        </div>
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
