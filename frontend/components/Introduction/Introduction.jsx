import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useStoreActions } from "easy-peasy";

export default function Introduction({ title }) {
  const chooseUser = useStoreActions((actions) => actions.changeUser);

  return (
    <>
      <Head>
        <title>{title} - BuddyGram</title>
      </Head>
      <section className="introduction">
        <div className="introduction-container">
          <p>klas 2HAc</p>
          <h1 className="h1">Welkom op Buddy or Bully!</h1>
          <p>Klik op je naam om door te gaan.</p>
          <div className="introduction-list">
            <p
              onClick={(e) => {
                chooseUser("Ahmed");
              }}
            >
              Dani Armitage
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
