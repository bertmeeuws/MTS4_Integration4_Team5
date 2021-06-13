import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { API_URL } from "../../constants/index";
import { signIn, useSession } from "next-auth/client";

import Link from "next/link";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [school, setSchool] = useState("");

  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleRegisterForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Wachtwoorden zijn niet hetzelfde");
    } else {
      axios
        .post(`${API_URL}/auth/local/register`, {
          username: email,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response?.data?.user?.id);

          axios
            .post(`${API_URL}/teachers`, {
              name: name,
              surname: surname,
              school: school,
              users_permissions_user: response?.data?.user?.id,
            })
            .then((response) => {
              console.log(response);
              console.log("Account created, now logging in");
              signIn("credentials", {
                email,
                password,
                callbackUrl: `${WEBSITE_URL}/dashboard`,
              });
            })
            .catch((error) => {
              /*
              console.log(error?.response?.data[0]);
              console.log(error?.response?.data[0]?.messages[0]?.message);
              setError(error?.response?.data[0]?.messages[0]?.message);
              */
            });
        })
        .catch((error) => {
          /*
          console.log(error?.response?.data[0]);
          console.log(error?.response?.data[0]?.messages[0]?.message);
          setError(error?.response?.data[0]?.messages[0]?.message);
          */
        });
    }
  };

  return (
    <section className="auth-grid">
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
            Registreren
          </marker>{" "}
          als leerkracht
        </h1>
        <form onSubmit={handleRegisterForm} className="form__login">
          <Head>
            <title>Registreren Leerkracht - BuddyGram</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/smiley.png" />
          </Head>
          {error !== null ? <p>{Error}</p> : ""}
          <div>
            <label
              className="label-text p-small pixelated-font bold"
              htmlFor="voornaam"
            >
              Voornaam:
            </label>
            <input
              onChange={(e) => setSurname(e.currentTarget.value)}
              type="text"
              name="voornaam"
              id="voornaam"
              value={surname}
              placeholder="Typ hier..."
              className="input-margin auth-input"
            />
          </div>
          <div>
            <label
              className="label-text p-small pixelated-font bold"
              htmlFor="achternaam"
            >
              Achternaam:
            </label>
            <input
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              name="achternaam"
              id="achternaam"
              value={name}
              placeholder="Typ hier..."
              className="input-margin auth-input"
            />
          </div>
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
            />
          </div>
          <div>
            <label
              className="label-text p-small pixelated-font bold"
              htmlFor="school"
            >
              School:
            </label>
            <input
              onChange={(e) => setSchool(e.currentTarget.value)}
              type="text"
              name="school"
              id="school"
              value={school}
              placeholder="Typ hier..."
              className="input-margin auth-input"
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
            />
          </div>
          <div>
            <label
              className="label-text p-small pixelated-font bold"
              htmlFor="wachtwoord"
            >
              Herhaal wachtwoord:
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              type="password"
              value={confirmPassword}
              id="wachtwoord"
              name="wachtwoord"
              placeholder="Typ wachtwoord hier"
              className="input-margin auth-input"
            />
          </div>
          <input
            className="form__auth--button button-primary-blue"
            value="registreren"
            type="submit"
          />
        </form>
        <div className="form__login-alreadyRegistered flex-horizontal p-small auth-">
          <p>Ik heb al een account.</p>
          <Link href="/login">
            <span style={{ marginLeft: "0.5rem" }} className="bold blue">
              Inloggen als leerkracht
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
