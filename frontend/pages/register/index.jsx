import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { API_URL, WEBSITE_URL } from "../../constants/index";
import { signIn, useSession, getSession } from "next-auth/client";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";
import Link from "next/link";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [school, setSchool] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [errSurname, setErrSurname] = useState(null);
  const [errName, setErrName] = useState(null);
  const [errEmail, setErrEmail] = useState(null);
  const [errSchool, setErrSchool] = useState(null);
  const [errPass, setErrPass] = useState(null);
  const [errConfPass, setErrConfPass] = useState(null);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    setError(null);

    email === "" ? setErrEmail("Vul een email in") : "";
    school === "" ? setErrSchool("Vul een school in") : "";
    surname === "" ? setErrSurname("Vul een voornaam in") : "";
    name === "" ? setErrName("Vul een naam in") : "";
    password === "" ? setErrPass("Vul een wachtwoord in") : "";
    password !== confirmPassword
      ? setErrConfPass("Wachtwoord komt niet overeen met het andere wachtwoord")
      : "";

    if (
      email !== "" &&
      school !== "" &&
      surname !== "" &&
      name !== "" &&
      password === confirmPassword
    ) {
      if (password !== confirmPassword) {
      } else {
        setLoading(true);
        axios
          .post(`${API_URL}/auth/local/register`, {
            username: email,
            email: email.toLowerCase(),
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
                setLoading(false);
              })
              .catch((error) => {
                setLoading(false);
                console.log(error);
                cleanFields();
              });
          })
          .catch((error) => {
            setLoading(false);
            setError("Het emailadres bestaat al");
            cleanFields();
          });
      }
    }
    cleanFields();
  };

  const cleanFields = () => {
    setName("");
    setSurname("");
    setSchool("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const override = css`
    display: block;
    margin-bottom: 1.5rem;
  `;

  return (
    <section className="auth-grid">
      <Head>
        <title>Registreren Leerkracht - BuddyGram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/smiley.png" />
      </Head>

      <div className="yellow-grid"></div>

      <div className="form__login-container">
        <p className="text__m-bold">BuddyGram</p>
        <h1 className="title__m-bold">
          <mark className="mark-yellow">Registreer</mark> als leerkracht
        </h1>

        <form onSubmit={handleRegisterForm} className="form__login">
          {error ? <p>{Error}</p> : ""}

          <div className="auth__wrapper-register">
            <div className="label__wrapper">
              {errSurname ? (
                <p
                  style={{ color: "var(--red)", marginBottom: "1rem" }}
                  className="title__xs-bold"
                >
                  {errSurname}
                </p>
              ) : (
                ""
              )}
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
                className="input-margin auth__input-register"
              />
            </div>

            <div className="label__wrapper">
              {errName ? (
                <p
                  style={{ color: "var(--red)", marginBottom: "1rem" }}
                  className="title__xs-bold"
                >
                  {errName}
                </p>
              ) : (
                ""
              )}
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
                className="input-margin auth__input-register"
              />
            </div>

            <div className="label__wrapper">
              <p style={{ color: "var(--red)" }} className="title__xs-bold">
                {emailErr}
              </p>
              {errEmail ? (
                <p
                  style={{ color: "var(--red)", marginBottom: "1rem" }}
                  className="title__xs-bold"
                >
                  {errEmail}
                </p>
              ) : (
                ""
              )}
              <label
                className="label-text p-small pixelated-font bold"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  if (/.+@.+\.[A-Za-z]+$/.test(email)) {
                    console.log("true");
                    setEmailErr(null);
                  } else {
                    console.log("false");
                    setEmailErr("Uw email voldoet niet aan het juiste formaat");
                  }
                }}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="email@email.com"
                className="input-margin auth__input-register"
              />
            </div>

            <div className="label__wrapper">
              {errSchool ? (
                <p
                  style={{ color: "var(--red)", marginBottom: "1rem" }}
                  className="title__xs-bold"
                >
                  {errSchool}
                </p>
              ) : (
                ""
              )}
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
                className="input-margin auth__input-register"
              />
            </div>

            <div className="label__wrapper">
              {errPass ? (
                <p
                  style={{ color: "var(--red)", marginBottom: "1rem" }}
                  className="title__xs-bold"
                >
                  {errPass}
                </p>
              ) : (
                ""
              )}
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
                className="input-margin auth__input-register"
              />
            </div>

            <div className="label__wrapper">
              {errConfPass ? (
                <p
                  style={{ color: "var(--red)", marginBottom: "1rem" }}
                  className="title__xs-bold"
                >
                  {errConfPass}
                </p>
              ) : (
                ""
              )}
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
                className="input-margin auth__input-register"
              />
            </div>
          </div>
          {loading ? (
            <PacmanLoader
              loading={loading}
              color={"var(--blue)"}
              css={override}
              size={25}
            />
          ) : (
            <input
              className="button__primary"
              value="registreren"
              type="submit"
            />
          )}
        </form>
        <div className="auth__switch-container">
          <p className="text__s-normal">Ik heb een account.</p>

          <Link href="/login">
            <span className="text__s-bold text__blue link">Inloggen als leerkracht</span>
          </Link>
        </div>
      </div>
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
