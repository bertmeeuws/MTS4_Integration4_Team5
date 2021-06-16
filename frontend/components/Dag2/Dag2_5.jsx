import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.5
      <p>-20 Volgers</p>
      <h1 className="title__m-bold">
        Je hebt volgers verloren omdat je de post niet verwijderd.
      </h1>
   
      <button onClick={(e) => nextRoute()}>Wat had ik beter gedaan?</button>
    </section>
  );
}
