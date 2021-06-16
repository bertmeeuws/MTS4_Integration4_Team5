import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_2({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  return (
    <section className="background-yellow stretch-container">
      1.2
      <h1 className="title__m-bold">Sleep je foto in de feed!</h1>
      <p>Grijp de foto met je muis en sleep deze in de feed.</p>
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </section>
  );
}
