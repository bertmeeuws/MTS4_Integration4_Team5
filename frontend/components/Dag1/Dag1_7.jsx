import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_7({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);

  const answer = useStoreState((state) => state.answer);

  return (
    <section className=" background-yellow stretch-container">
      <div className="game-wrapper">
        <Background />
        <p className="hidden">1.7</p>
        <div className="game__box__margin text-center game__textBox">
          <p className="game__box__followers__circle">
            <span className="title__m-bold">{answer?.followers_text}</span>
            <span className="text__m-normal">volgers</span>
          </p>
          <h1 className="title__m-bold">{answer?.penalty}</h1>
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
