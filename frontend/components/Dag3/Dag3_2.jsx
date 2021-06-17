import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag3_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      3.2
      <div className="game-wrapper">
        <h1 className="title__m-bold">
          Je hebt 3 likes en 0 reacties. Hoe voel je jou daarbij ?
        </h1>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Verwiijder de post
        </button>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Ik wil meer likes
        </button>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Maakt helemaal niet uit
        </button>
      </div>
    </section>
  );
}
