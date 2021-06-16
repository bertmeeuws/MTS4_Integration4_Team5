import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_6() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      2.6
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
