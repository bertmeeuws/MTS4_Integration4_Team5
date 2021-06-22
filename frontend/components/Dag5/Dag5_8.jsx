import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5_8() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      <p className="hidden">5.8</p>
      <Background />

      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
