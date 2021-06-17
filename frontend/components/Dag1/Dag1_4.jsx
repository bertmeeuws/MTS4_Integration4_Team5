import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Dag1_4({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);

  return (
    <section className="background-yellow stretch-container">
      1.4
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </section>
  );
}
