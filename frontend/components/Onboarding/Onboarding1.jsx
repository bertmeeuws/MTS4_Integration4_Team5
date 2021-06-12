import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Onboarding1() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  return (
    <section>
      <h1 className="h1">Elke dag kan er wel iets gebeuren</h1>
      <p className="p">
        Elke dag krijg je een situatie voorgeschoteld die je op het internet kan
        ervaren.
      </p>
      <button onClick={(e) => changeRoute(2)}>
        Ontdek hoe je volgers kan krijgen
      </button>
    </section>
  );
}
