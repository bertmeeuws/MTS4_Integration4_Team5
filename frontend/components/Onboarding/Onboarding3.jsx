import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";

export default function Onboarding3() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  return (
    <section className="introduction background-yellow stretch-container">
      <NavBar percent={6} />
      <div className="introduction-container">
        <h1 className="h2 margin-top align-center">Verlies volgers</h1>
        <p>Wanneer je een situatie niet correct inschat verlies je volgers.</p>
        <div className="introduction-list">
          <button
            className="button-secondary-white"
            onClick={(e) => {
              changeRoute(2);
            }}
          >
            Stap terug
          </button>
          <button
            onClick={(e) => {
              changeRoute(4);
            }}
            className="button-primary-blue"
          >
            Kleuren kiezen
          </button>
        </div>
      </div>
    </section>
  );
}
