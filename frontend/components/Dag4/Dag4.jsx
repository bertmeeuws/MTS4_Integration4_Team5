import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      4.
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
