import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_6() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.6
      <p>-20 Volgers</p>
      <h1 className="title__m-bold">
        Vergeet je nooit uit te loggen als je op een openbaar toestel op social
        media gaat.
      </h1>
      <button onClick={(e) => nextRoute()}>Naar overzicht</button>
    </section>
  );
}
