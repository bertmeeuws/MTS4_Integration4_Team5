import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag5_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      5.1
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
