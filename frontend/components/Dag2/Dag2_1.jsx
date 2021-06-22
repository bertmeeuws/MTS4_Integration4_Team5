import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import SwipeToUnlock from "../SwipeToUnlock/SwipeToUnlock";

export default function Dag2_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">2.1</p>
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          Iemand heeft toegang gehad tot jouw account en heeft een vreemde post
          op jouw feed gezet.
        </h1>
        <SwipeToUnlock action={nextRoute} />
      </div>
    </section>
  );
}
