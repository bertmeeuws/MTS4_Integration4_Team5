import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      2.1
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
