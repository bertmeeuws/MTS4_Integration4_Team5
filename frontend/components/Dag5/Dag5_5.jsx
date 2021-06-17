import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      5.5
      <Background />

      <div className="game-wrapper">
        <h1 className="title__m-bold">
          Ben je slachtoffer (geweest) van cyberpesten en wil je erover praten
          met de leerkracht in privé?
        </h1>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Ik wil praten
        </button>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Afsluiten
        </button>
      </div>
    </section>
  );
}
