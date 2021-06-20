import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const answer = useStoreState((state) => state.answer);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">4.3</p>
      <Background />
      <div className="game-wrapper">
        <div className="game__textBox">
          <p className="text-center text__m-normal">{answer?.followers_text}</p>
          <h1 className="title__m-bold text-center">{answer?.penalty}</h1>
        </div>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          {answer?.button}
        </button>
      </div>
    </section>
  );
}
