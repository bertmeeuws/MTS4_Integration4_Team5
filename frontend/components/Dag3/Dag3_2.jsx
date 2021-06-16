import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag3_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      3.2
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
