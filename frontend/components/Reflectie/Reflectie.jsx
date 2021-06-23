import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import SwipeToUnlock from "../SwipeToUnlock/SwipeToUnlock.jsx";
import { useRouter } from "next/router";

export default function Reflectie({ end }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const router = useRouter();
  function RedirectPage() {
    // Make sure we're in the browser
    if (typeof window !== "undefined") {
      router.push("/");
    }
  }

  return (
    <section className="center-middle background-yellow stretch-container">
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold game__textBox">
          {end
            ? "Tijd voor een laatste reflectiegesprek met de leerkracht."
            : "Tijd voor een reflectiegesprek met de leerkracht."}
        </h1>
        {end ? (
          <SwipeToUnlock end={end} action={() => RedirectPage()} />
        ) : (
          <SwipeToUnlock action={nextRoute()} />
        )}
      </div>
    </section>
  );
}
