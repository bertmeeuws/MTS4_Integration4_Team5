import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_11() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      1.11
      <h1 className="title__m-bold">Je hebt je niet kunnen afmelden</h1>
      <button onClick={(e) => nextRoute()}>Naar overzicht</button>
    </section>
  );
}
