import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag5_6() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      5.6
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
