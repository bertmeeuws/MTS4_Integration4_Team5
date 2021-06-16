import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2<button onClick={(e) => nextRoute()}>Volgende</button>
    </section>
  );
}
