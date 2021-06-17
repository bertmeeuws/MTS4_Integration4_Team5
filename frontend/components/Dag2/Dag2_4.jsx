import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";


export default function Dag2_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      2.4
      <div className="game-wrapper">
        <div className="game__textBox">
          <p className="text-center">-20 PENALTY HIER</p>
          <h1 className="title__m-bold text-center">
            Je hebt volgers verloren omdat je de post niet hebt verwijderd.
          </h1>
        </div>
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
