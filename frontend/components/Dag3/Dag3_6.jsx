import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import { API_URL } from "../../constants";
import axios from "axios";

export default function Dag3_6({ data }) {
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
      3.6
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
        Dag afsluiten
      </button>
    </section>
  );
}
