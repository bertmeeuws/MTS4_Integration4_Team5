import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag3_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const answer = useStoreState((state) => state.answer);

  return (
    <section className="section__day3_3 center-middle background-yellow stretch-container">
      <p className="hidden">3.3</p>
      <Background />
      <div className="game-wrapper">
        <div className="game__textBox text-center">
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
