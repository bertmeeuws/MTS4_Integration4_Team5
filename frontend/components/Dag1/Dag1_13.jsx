import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_13() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      1.13
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
