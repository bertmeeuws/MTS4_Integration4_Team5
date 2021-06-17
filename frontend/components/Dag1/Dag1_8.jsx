import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_8({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      1.8
      <div className="game-wrapper">
        <h1 className="pixelated-font title__m-bold">
          Als iemand zijn negatieve mening geeft dan is het beter om daar
          positief op te antwoorden
        </h1>
        <button onClick={(e) => nextRoute()}>Naar overzicht</button>
      </div>
    </section>
  );
}
