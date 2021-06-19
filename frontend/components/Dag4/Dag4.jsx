import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">4.</p>
      <Background />

      <div className="game__box__margin game-wrapper">
        <div className="game__textBox">
          <h1 className="title__m-bold">
            Je hebt een bericht verzoek ontvangen van LianaDjok354
          </h1>
          <p>Je kan kijken wat ze stuurde</p>
        </div>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Bekijk het bericht
        </button>
      </div>
    </section>
  );
}
