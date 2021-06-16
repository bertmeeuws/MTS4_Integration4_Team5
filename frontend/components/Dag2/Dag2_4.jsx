import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag2_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      2.4
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
