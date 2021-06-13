import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function Nav({ children }) {
  return (
    <>
      <nav className="nav-container">
        <div className="nav wrapper">
          <Image src="/assets/logo.svg" width={89} height={46.05} />
          <ul className="nav__list">
            <li className="nav__list__item nav--item">
              <button onClick={(e) => signIn()} href="login">
                Inloggen als leerkracht
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}
