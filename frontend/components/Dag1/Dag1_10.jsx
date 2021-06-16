import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_10() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      1.10
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
