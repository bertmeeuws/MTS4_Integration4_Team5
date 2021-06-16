import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_12() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      1.12
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
