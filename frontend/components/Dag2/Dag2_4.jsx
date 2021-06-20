import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import { useStoreActions, useStoreState } from "easy-peasy";
import { TweenLite } from "gsap";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Dag2_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const answer = useStoreState((state) => state.answer);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      2.4
      <div className="game-wrapper">
        <div className="game__textBox">
          <p className="text-center">{answer?.followers_text}</p>
          <h1 className="title__m-bold text-center">{answer?.penalty}</h1>
        </div>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Ga verder
        </button>
      </div>
    </section>
  );
}
