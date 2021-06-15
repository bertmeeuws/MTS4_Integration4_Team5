import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import { WEBSITE_URL } from "../../constants";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      signIn("credentials", {
        email,
        password,
        callbackUrl: `${WEBSITE_URL}/dashboard`,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="auth-grid">
      <Head>
        <link rel="icon" href="/smiley.png" />
      </Head>
      <div className="yellow-grid"></div>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="form__login-container"
      >
        <p className="p bold align-left">BuddyGram</p>
        <h1 className="h1 align-left">
          <marker
            style={{ backgroundColor: "var(--yellow)", color: "var(--black)" }}
          >
            Login
          </marker>{" "}
          als leerkracht
        </h1>
        <form
          style={{ gridTemplateColumns: "1fr", maxWidth: "40rem" }}
          onSubmit={handleLoginForm}
          className="form__login"
        >
          <Head>
            <title>Login Leerkracht - BuddyGram</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/smiley.png" />
          </Head>
          {error !== null ? <p>An error occured</p> : ""}

          <div>
            <label
              className="label-text p-small pixelated-font bold"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="email@email.com"
              className="input-margin auth-input"
              style={{ minWidth: "40rem" }}
            />
          </div>

          <div>
            <label
              className="label-text p-small pixelated-font bold"
              htmlFor="wachtwoord"
            >
              Wachtwoord:
            </label>

            <input
              onChange={(e) => setPassword(e.currentTarget.value)}
              type="password"
              value={password}
              id="wachtwoord"
              name="wachtwoord"
              placeholder="Typ uw wachtwoord hier..."
              className="input-margin auth-input"
              style={{ minWidth: "40rem" }}
            />
          </div>

          <input
            className="form__auth--button button-primary-blue"
            value="inloggen"
            type="submit"
          />
        </form>
        <div className="form__login-alreadyRegistered flex-horizontal p-small auth-">
          <p>Nog geen account?</p>
          <Link href="/register">
            <span style={{ marginLeft: "0.5rem" }} className="bold blue">
              Registreer jezelf als leerkracht
            </span>
          </Link>
        </div>
      </div>
      <button onClick={(e) => signOut()}>Sign out</button>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  console.log(session?.user?.user?.id);
  if (session?.user) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
