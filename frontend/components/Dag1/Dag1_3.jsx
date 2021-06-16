import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_3({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  
  return (
    <section className="background-yellow stretch-container">
      1.3
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </section>
  );
}
