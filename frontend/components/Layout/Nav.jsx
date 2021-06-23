import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function Nav({ children }) {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Image src="/assets/img/logo.svg" width={89} height={46.05} />

          <button
            style={{ cursor: "pointer" }}
            onClick={(e) => signIn()}
            href="login"
            className="button__header title__s-bold"
          >
            Inloggen als leerkracht
          </button>
        </div>
      </nav>
      {children}
    </>
  );
}
