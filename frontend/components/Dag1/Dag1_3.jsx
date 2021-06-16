import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_3({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <h1 className="title__m-bold">Jouw foto staat online!</h1>
      <p>Je hebt meteen 100 volgers gekregen door je foto!</p>
      <button onClick={(e) => nextRoute()}>Bekijk je foto op de feed</button>
    </section>
  );
}
