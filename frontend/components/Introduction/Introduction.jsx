import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";
import ListWindow from "../ListWindow/ListWindow";

export default function Introduction({ data }) {
  const chooseUser = useStoreActions((actions) => actions.changeGamer);
  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  console.log(data[0]);

  const [game, setGame] = useState(data[0]);
  console.log(game);

  return (
    <>
      <section className="introduction stretch-container">
        <div className="introduction-container">
          <h1 className="title__m-bold">
            Welkom op <marker className="mark-blue">BuddyGram!</marker>
          </h1>
          <p className="text__m-normal">Klik op je naam om door te gaan.</p>

          <div className="game-wrapper">
            <ListWindow text={`Leerlingen klas ${data[0].name}`}>
              <div className="introduction--list">
                {game.students.map((student) => {
                  return (
                    <button
                      key={student.key}
                      className="button__secondary text__m-normal"
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
            </ListWindow>
          </div>
        </div>
      </section>
    </>
  );
}
