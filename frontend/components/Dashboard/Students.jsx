import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import Image from "next/image";

export default function Students({ teacher, game, setId }) {
  const { id, surname } = teacher;
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");

  useEffect(async () => {
    try {
      const response = await axios.get(`${API_URL}/games?id=${game}`);

      setStudents(response?.data[0]?.students);
    } catch (e) {
      setId(1);
    }
  }, []);

  const refetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/games?id=${game}`);

      setStudents(response?.data[0]?.students);
    } catch (e) {
      setId(1);
    }
  };

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

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!input) {
      alert("Laat de velden niet leeg");
    } else {
      try {
        const response = await axios.post(`${API_URL}/students`, {
          name: input,
          private_chat: false,
          game: game,
        });
        let array = students;
        array.push(response.data);
        setStudents(array);
        setInput("");
        refetchUsers();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <section className="dashboard-newgame">
      <p className="dashboard-newgame-welcome p blue bold">Welkom {surname}</p>
      <h1 className="h2">Leerlingen aanpassen</h1>
      <form
        className="dashboard__changestudents__form"
        onSubmit={handleSubmitForm}
      >
        <div className="dashboard__changestudents__div">
          <label htmlFor="student" className="title__xs-bold">
            Leerling toevoegen:
          </label>
          <input
            name="student"
            id="student"
            className="dashboard__changestudents__input text__s-normal"
            placeholder="Naam van de student"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </div>
        <input
          className="button__secondary text__s-normal"
          type="submit"
          value="toevoegen"
        />
      </form>

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
