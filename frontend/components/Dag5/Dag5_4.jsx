import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import { API_URL } from "../../constants";
import axios from "axios";
import Background from "../Background/Background";
import ListWindow from "../ListWindow/ListWindow";

export default function Dag5_4({ data }) {

  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const [students, setStudents] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`${API_URL}/students?game=${data.id}`);

        setStudents(response.data);

    } catch (e) {}
  }, []);

  return (
    <section className="section__5_4 background-yellow stretch-container">
      <p className="hidden">5.4</p>
      <Background />
      <div className="game-wrapper">
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
          Dag afsluiten
        </button>
        
      </div>
    </section>
  );
}
