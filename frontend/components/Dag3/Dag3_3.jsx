import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";


export default function Dag3_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      3.3
      <Background />

      <div className="game-wrapper">
        <div className="game__textBox">
          <p className="text-center">-20 PENALTY HERE</p>
          <h1 className="title__m-bold ">
            Je hebt volers verloren omdat je je humeur laat beïnvloeden door
            likes.
          </h1>
        </div>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Wat kan ik hier aan doen?
        </button>
      </div>
    </section>
  );
}
