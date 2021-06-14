import React from "react";
import { signOut } from "next-auth/client";

export default function NavDashboard({ setId, id }) {
  return (
    <div className="nav__grid">
      <nav className="nav__dashboard">
        <ul className="nav__dashboard__list">
          <li
            onClick={(e) => setId(0)}
            className={`nav__dashboard__list-item p-small ${
              id === 0 ? "nav__dashboard-active" : ""
            }`}
          >
            nieuwe game
          </li>
          <li
            onClick={(e) => setId(1)}
            className={`nav__dashboard__list-item p-small ${
              id === 1 ? "nav__dashboard-active" : ""
            }`}
          >
            gemaakte games
          </li>
          <li
            onClick={(e) => signOut()}
            className="nav__dashboard__list-item nav__dashboard__list-signOff p-small"
          >
            afmelden
          </li>
        </ul>
      </nav>
    </div>
  );
}
