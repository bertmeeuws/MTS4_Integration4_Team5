import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { API_URL } from "../../constants";
import axios from "axios";
import Background from "../Background/Background";
import ListWindow from "../ListWindow/ListWindow";

export default function Dag1_12({ data }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [students, setStudents] = useState([]);

  useEffect(async () => {
    try {

      const response = await axios.get(`${API_URL}/students?game=${data.id}`);
      setStudents(response.data);

    } catch (e) {}
  }, []);

  return (
    <section className="day__middle-center">
      
      <Background />

      <div className="game-wrapper">
        <h1 className="title__m-bold hidden">Overzicht</h1>
        <ListWindow text={`Leerlingen klas ${data.name}`}>
          <ol className="list__window__container">
            {students.map((student) => {
              return (
                <li className="list__window__item">
                  <p>{student.name}</p>
                  <p className="title__s-bold">
                    {student?.points?.pop()?.followers}
                     , volgers
                  </p>
                </li>
              );
            })}
          </ol>
        </ListWindow>
        <button
          className="button__primary"
          onClick={(e) => nextRoute()}>
          naar volgende dag
        </button>
      </div>
    </section>
  );
}
