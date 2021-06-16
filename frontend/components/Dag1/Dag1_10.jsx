import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_10() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      1.10
      <h1 className="title__m-bold">?????</h1>
      <button onClick={(e) => nextRoute()}>Naar overzicht</button>
    </section>
  );
}
