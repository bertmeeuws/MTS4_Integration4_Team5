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
    <section className="background-yellow stretch-container">
      3.3
      <Background />
      <div className="game-wrapper">
        <div className="game__textBox text-center">
          <p className="text-center">{answer?.followers_text}</p>
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
