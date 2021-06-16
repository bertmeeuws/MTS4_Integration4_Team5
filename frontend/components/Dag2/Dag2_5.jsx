import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      2.5
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
