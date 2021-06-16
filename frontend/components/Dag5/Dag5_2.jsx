import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag5_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      5.2
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
