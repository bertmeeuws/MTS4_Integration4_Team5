import React from "react";

export default function NavDashboard() {
  return (
    <div className="nav__grid">
      <nav className="nav__dashboard">
        <ul className="nav__dashboard__list">
          <li className="nav__dashboard__list-item p-small nav__dashboard-active">
            nieuwe game
          </li>
          <li className="nav__dashboard__list-item p-small">gemaakte games</li>
          <li className="nav__dashboard__list-item nav__dashboard__list-signOff p-small">
            afmelden
          </li>
        </ul>
      </nav>
    </div>
  );
}
