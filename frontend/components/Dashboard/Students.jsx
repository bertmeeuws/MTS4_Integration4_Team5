import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import Image from "next/image";

export default function Students({ teacher, game, setId }) {
  const { id, surname } = teacher;
  const [students, setStudents] = useState([]);
  console.log(teacher);
  console.log(game);

  useEffect(async () => {
    try {
      const response = await axios.get(`${API_URL}/games?id=${game}`);
      console.log(response?.data[0]?.students);
      setStudents(response?.data[0]?.students);
    } catch (e) {
      setId(1);
    }
  }, []);

  const deleteStudent = async (id) => {
    console.log("Delete student: " + id);
    try {
      const response = await axios.delete(`${API_URL}/students/${id}`);
      let filteredArray = students.filter((item) => item.id !== id);
      setStudents(filteredArray);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="dashboard-newgame">
      <p className="dashboard-newgame-welcome p blue bold">Welkom {surname}</p>
      <h1 className="h2">Leerlingen aanpassen</h1>
      <ul className="newGame-students">
        {students?.map((item) => {
          return (
            <div className="newGame-student-item">
              <p className="pixelated-font p-big">{item.name}</p>
              <Image
                src="/assets/img/delete.svg"
                onClick={(e) => deleteStudent(item.id)}
                width={15}
                style={{ cursor: "pointer" }}
                height={15}
              />
            </div>
          );
        })}
      </ul>
    </section>
  );
}

/**/
