import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <h1 className="title__m-bold">Deel een foto met BuddyGram</h1>
      <p>Maak, kies of upload een foto en deel deze op je eigen feed.</p>
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </section>
  );
}
