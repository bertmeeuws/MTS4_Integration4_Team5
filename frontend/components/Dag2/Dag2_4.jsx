import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.4
      <div className="game-wrapper">
        <p>-20 PENALTY HIER</p>
        <h1 className="title__m-bold">
          Je hebt volgers verloren omdat je de post niet hebt verwijderd.
        </h1>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Wat had ik beter gedaan?
        </button>
      </div>
    </section>
  );
}
