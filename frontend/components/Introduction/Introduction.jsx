import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useStoreActions } from "easy-peasy";

export default function Introduction({ title }) {
  const chooseUser = useStoreActions((actions) => actions.changeUser);
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  useEffect(() => {
    changeRoute(0);
  }, []);

  return (
    <>
      <section className="introduction background-yellow stretch-container">
        <div className="introduction-container">
          <p>klas 2HAc</p>
          <h1 className="h1">
            Welkom op <marker>BuddyGram!</marker>
          </h1>
          <p>Klik op je naam om door te gaan.</p>
          <div className="introduction-list">
            <button
              className="button-secondary-white"
              onClick={(e) => {
                chooseUser("Ahmed Jipla");
                changeRoute(1);
              }}
            >
              Dani Armitage
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
