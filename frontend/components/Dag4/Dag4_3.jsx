import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag4_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      4.3
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
