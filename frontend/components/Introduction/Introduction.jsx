import React from "react";
import Link from "next/link";

export default function Introduction({ setRoute }) {
  return (
    <>
      <div className="introduction">
        <div className="introduction-container">
          <p>klas 2HAc</p>
          <h1 className="h1">Welkom op Buddy or Bully!</h1>
          <p>Klik op je naam om door te gaan.</p>
          <button onClick={(e) => setRoute(1)}>Ga naar de photobooth</button>
        </div>
      </div>
    </>
  );
}
