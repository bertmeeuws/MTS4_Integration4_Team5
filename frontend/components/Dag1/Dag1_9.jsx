import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_9({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <h1 className="title__m-bold">
        Tijd om deze dag af te sluiten. Vergeet je niet af te melden
      </h1>
      <p>Je hebt meteen 100 volgers gekregen door je foto!</p>
      1.9 <button onClick={(e) => nextRoute()}>Afmelden van BuddyGram</button>
    </section>
  );
}
