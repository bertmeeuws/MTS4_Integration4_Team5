import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Dag1({ route }) {
  const user = useStoreState((state) => state.user);
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [name, surname] = user.split(" ");

  console.log(name);

  return (
    <section className="introduction background-yellow stretch-container">
      <div className="introduction-container">
        <h1 className="h1">
          Welkom, {name} op deze maandag. Deel een foto met de wereld.
        </h1>
        <p>
          In de volgende stap kan je een foto maken of uploaden en daarna op je
          feed plaatsen.
        </p>

        <button onClick={(e) => nextRoute()}>Start buddygram op</button>
      </div>
    </section>
  );
}
