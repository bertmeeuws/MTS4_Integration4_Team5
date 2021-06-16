import React from "react";
import { useStoreActions } from "easy-peasy";


export default function Dag5_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <div>
      5.3
      <button onClick={(e) => nextRoute()}>Volgende</button>
    </div>
  );
}
