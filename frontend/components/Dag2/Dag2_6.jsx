import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { useStoreActions } from "easy-peasy";
import axios from "axios";
import Background from "../Background/Background";
import ListWindow from "../ListWindow/ListWindow";

export default function Dag2_6({ data }) {

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
          <div className="list__window__container">
            {students.map((student) => {
              return (
                <div className="list__window__item">
                  <p>{student.name}</p>
                  <p className="title__s-bold">
                    {student?.points?.pop()?.followers}
                  </p>
                </div>
              );
            })}
          </div>
        </ListWindow>

        <button
          className="button__primary"
          onClick={(e) => nextRoute()}>
          Volgende
        </button>
      </div>
    </section>
  );
}
