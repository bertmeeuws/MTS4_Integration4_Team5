import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Nav({ children }) {
  return (
    <>
      <nav className="nav wrapper">
        <ul className="nav__list">
          <li className="nav__list__item nav--item">
            <button onClick={(e) => signIn()} href="login">
              Inloggen als leerkracht
            </button>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
