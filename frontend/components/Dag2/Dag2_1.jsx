import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.1
      <h1 className="title__m-bold">Nieuwe dag, nieuwe kansen</h1>
      <p>
        Het is dinsdag 7u30 ‘s ochtends. Klaar voor een nieuwe dag! Laten we
        snel eens BuddyGram checken!
      </p>
      <button onClick={(e) => nextRoute()}>Bekijk feed</button>
    </section>
  );
}
