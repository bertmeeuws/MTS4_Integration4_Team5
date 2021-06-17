import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag3_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      3.4
      <div className="game-wrapper">
        <h1 className="title__m-bold">
          Er bestaat een functie om likes onzichtbaar te zetten. <br />
          <br />
          Wil je deze functie inschakelen?
        </h1>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Nee, blijf likes tonen
        </button>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Ja, verberg likes
        </button>
      </div>
    </section>
  );
}
