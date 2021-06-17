import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Dag1_7({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  return (
    <section className="background-yellow stretch-container">
      1.7
      <p>-20 volgers</p>
      <h1 className="title__m-bold">
        Je hebt volgers verloren omdat je online ruzie maakt
      </h1>
      <button onClick={(e) => nextRoute()}>Wat had ik beter gedaan?</button>
    </section>
  );
}
