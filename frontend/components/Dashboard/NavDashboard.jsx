import React from "react";
import { signOut } from "next-auth/client";

export default function NavDashboard({ setId, id }) {
  return (
    <div className="nav__grid">
      <nav className="nav__dashboard">
        <ul className="nav__dashboard__list">
          {id === 2 || id === 3 ? (
            <>
              <li
                onClick={(e) => setId(1)}
                className={`nav__dashboard__list-item p-small ${
                  id === 1 ? "nav__dashboard-active" : ""
                }`}
              >
                terug naar spellen
              </li>
              <li
                onClick={(e) => setId(3)}
                className={`nav__dashboard__list-item p-small ${
                  id === 3 ? "nav__dashboard-active" : ""
                }`}
              >
                leerlingen
              </li>
            </>
          ) : (
            <>
              <li
                onClick={(e) => setId(1)}
                className={`nav__dashboard__list-item p-small ${
                  id === 1 ? "nav__dashboard-active" : ""
                }`}
              >
                overzicht
              </li>
              <li
                onClick={(e) => setId(0)}
                className={`nav__dashboard__list-item p-small ${
                  id === 0 ? "nav__dashboard-active" : ""
                }`}
              >
                nieuwe game
              </li>
            </>
          )}

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
