import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Onboarding2() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  return (
    <section className="introduction background-yellow stretch-container">
      <div className="introduction-container">
        <h1 className="h1">Verdien volgers</h1>
        <p>
          Schat de situatie zo goed mogelijk in en verdien zo veel mogelijk
          volgers.
        </p>
        <div className="introduction-list">
          <button
            onClick={(e) => {
              changeRoute(1);
            }}
          >
            Stap terug
          </button>
          <button
            onClick={(e) => {
              changeRoute(3);
            }}
          >
            Ontdek hoe je volgers verliest
          </button>
        </div>
      </div>
    </section>
  );
}
