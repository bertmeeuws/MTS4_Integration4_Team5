import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.1
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          Iemand heeft toegang gehad tot jouw account en heeft een vreemde post
          op jouw feed gezet.
        </h1>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Swipe om te ontgrendelen
        </button>
      </div>
    </section>
  );
}
