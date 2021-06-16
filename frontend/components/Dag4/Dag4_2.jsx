import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag4_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      4.2
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
