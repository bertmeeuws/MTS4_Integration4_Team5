import React from "react";
import Link from "next/link";

export default function Nav({ children }) {
  return (
    <>
      <nav className="nav wrapper">
        <ul className="nav__list">
          <li className="nav__list__item nav--item">
            <Link href="login">Inloggen als leerkracht</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
