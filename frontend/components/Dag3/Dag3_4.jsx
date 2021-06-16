import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag3_4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      3.4
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
