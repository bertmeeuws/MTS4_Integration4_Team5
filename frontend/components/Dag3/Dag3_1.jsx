import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag3_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      3.1
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
