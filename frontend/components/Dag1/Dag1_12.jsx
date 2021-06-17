import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { API_URL } from "../../constants";
import axios from "axios";
import Background from "../Background/Background";


export default function Dag1_12({ data }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [students, setStudents] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`${API_URL}/students?game=${data.id}`);
      //console.log(response.data);

      //const response = await axios.get(`${API_URL}?${query}`);

      console.log(response.data);

      setStudents(response.data);

      console.log(students);
    } catch (e) {}
  }, []);

  return (
    <section className="background-yellow stretch-container">
      <Background />
      1.12
      <div className="game-wrapper">
        <h1 className="title__m-bold">OVERZICHT LIJSTJE</h1>
        {students.map((student) => {
          return (
            <p>
              {student.name} {student.points.pop().followers}
            </p>
          );
        })}
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Volgende
        </button>
      </div>
    </section>
  );
}
