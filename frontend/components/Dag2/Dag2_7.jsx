import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_7() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.7
      <h1 className="title__m-bold">OVERZICHT LIJST</h1>
      <button onClick={(e) => nextRoute()}>Dag afsluiten</button>
    </section>
  );
}
