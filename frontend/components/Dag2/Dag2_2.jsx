import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      2.2
      <h1 className="title__m-bold">
        Iemand heeft toegang gehad tot jouw accent en heeft een vreemde post op
        jouw feed gezet.
      </h1>
      <button onClick={(e) => nextRoute()}>Swipe om te ontgrendelen</button>
    </section>
  );
}
