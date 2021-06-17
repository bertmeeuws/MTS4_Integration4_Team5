import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_8({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      1.8
      <Background />
      <div className="game-wrapper">
        <h1 className="pixelated-font title__m-bold">
          Als iemand zijn negatieve mening geeft dan is het beter om daar
          positief op te antwoorden
        </h1>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Naar overzicht
        </button>
      </div>
    </section>
  );
}
