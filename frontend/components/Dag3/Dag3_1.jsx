import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag3_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const picture = useStoreState((state) => state.profile_picture);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">3.1</p>
      <Background />
      <div className="game-wrapper">
        <div className="game__day3__post">
          <img src={picture} alt="" />
          <div className="game__day3__likes__container">
            <p className="text__s-normal">
              Kareltje en 2 anderen vinden dit leuk
            </p>
          </div>
        </div>
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
