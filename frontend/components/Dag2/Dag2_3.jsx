import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.3
      <p>
        Ik had gisteren alle antwoorden van het examen in mijn pennenzak
        gestopt.
      </p>
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </section>
  );
}
