import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Onboarding3() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  return (
    <section className="introduction">
      <div className="introduction-container">
        <h1 className="h1">Verlies volgers</h1>
        <p>Wanneer je een situatie niet correct inschat verlies je volgers.</p>
        <div className="introduction-list">
          <button 
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
          >
            Kleuren kiezen
          </button>
        </div>
      </div>
    </section>
  );
}
