import React from "react";
import Link from "next/link";

export default function Introduction({ setRoute }) {
  return (
    <>
      <div className="introduction">
        <div className="introduction-container">
          <h1 className="h1">Welkom bij BuddyGram!</h1>
          <p>Deel een foto met de wereld.</p>
          <button onClick={(e) => setRoute(1)}>Ga naar de photobooth</button>
        </div>
      </div>
    </>
  );
}
