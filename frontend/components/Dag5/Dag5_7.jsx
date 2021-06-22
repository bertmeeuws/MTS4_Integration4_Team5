import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5_7() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      <p className="hidden">5.6</p>
      <Background />

      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
