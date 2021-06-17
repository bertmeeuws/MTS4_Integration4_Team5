import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag4_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      4.3
      <div className="game-wrapper">
        <div className="game__textBox">
          <p className="text-center text__m-normal">-30 PENALTY HERE</p>
          <h1 className="title__m-bold">
            Je hebt volers verloren omdat je op een spambericht hebt geklikt
          </h1>
        </div>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Wat kon ik beter doen?
        </button>
      </div>
    </section>
  );
}
