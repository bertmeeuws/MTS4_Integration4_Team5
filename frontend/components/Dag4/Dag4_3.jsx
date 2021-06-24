import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag4_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const answer = useStoreState((state) => state.answer);

  return (
    <section className="section__day4_3 center-middle background-yellow stretch-container">
      <p className="hidden">4.3</p>
      <Background />
      <div className="game-wrapper">
        <div className="game__textBox">
          <p className="game__box__followers__circle">
            <span className="title__m-bold">{answer?.followers_text}</span>
            <span className="text__m-normal">volgers</span>
          </p>
          <h1 className="title__m-bold text-center">{answer?.penalty}</h1>
        </div>

        <button
          className="button__primary"
          onClick={(e) => nextRoute()}
        >
          {answer?.button}
        </button>
      </div>
    </section>
  );
}
