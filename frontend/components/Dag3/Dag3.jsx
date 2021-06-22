import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="center-middle background-yellow stretch-container">
      <p className="hidden"> 3</p>
      <Background />

      <div className="game-wrapper">
        <div className="game__textBox">
          <h1 className="title__m-bold">Bekijk hoe goed je foto het doet</h1>
          <p>
            Laten we eens kijken naar hoe goed de foto die je maandag hebt
            upgeload het doet.
          </p>
        </div>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Bekijk je foto
        </button>
      </div>
    </section>
  );
}
