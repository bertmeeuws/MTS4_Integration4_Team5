import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Introduction({ data }) {
  const chooseUser = useStoreActions((actions) => actions.changeGamer);
  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [game, setGame] = useState(data[0]);
  console.log(game);

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
            {game.students.map((student) => {
              return (
                <button
                  key={student.key}
                  className="button-secondary-white"
                  onClick={(e) => {
                    chooseUser({ name: student.name, id: student.id });
                    nextRoute();
                  }}
                >
                  {student.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
