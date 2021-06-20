import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag3_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const picture = useStoreState((state) => state.profile_picture);

  return (
    <section className="background-yellow stretch-container">
      3.1
      <Background />
      <div className="game-wrapper">
        <img src={picture} alt="" />
        <p>Kareltje en 2 anderen vinden dit leuk</p>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Volgende
        </button>
      </div>
    </section>
  );
}
