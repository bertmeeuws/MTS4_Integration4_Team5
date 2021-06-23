import React, { useState } from "react";
import Window2 from "./Containers/Window2";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { API_URL, WEBSITE_URL } from "../../constants/index";

export default function NewGame({ teacher }) {
  const { id } = teacher;

  const [name, setName] = useState("");

  const [students, setStudents] = useState([]);
  const [addStudent, setAddStudent] = useState("");
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);

  const [link, setAddLink] = useState("");

  const handleSubmitNewGame = async (e) => {
    e.preventDefault();
    setAlert(null);
    if (name === "" || students?.length === 0) {
      setError("Laat de velden niet leeg");
      if (name === "") {
        setError("Laat de klasnaam niet leeg");
      }
      if (students?.length === 0) {
        setError("Je moet tenminste 1 leerling per game toevoegen");
      }
      if (name === "" || students.length === 0) {
        setError("Laat de klasnaam niet leeg en voeg tenminste 1 student toe");
      }
    } else {
      console.log(students);
      setError(null);
      try {
        const created_game = await axios.post(`${API_URL}/games`, {
          link: uuid(),
          name: name,
          teacher: id,
        });
        console.log(created_game.data);
        setAddLink(created_game.data.link);
        try {
          students.forEach(async (student) => {
            const created_student = await axios.post(`${API_URL}/students`, {
              name: student.name,
              private_chat: false,
              game: created_game.data.id,
            });
          });
          setAlert("Uw game werd gemaakt");
        } catch (e) {
          console.log("Error creating student");
          setError("Er is een probleem opgetreden");
        }
      } catch (e) {
        console.log("Error creating game");
        console.log(e);
        setError("Er is een probleem opgetreden");
      }
    }
  };

  const addStudentToList = (e) => {
    e.preventDefault();
    if (addStudent === "") {
      setError("Geef de student een naam");
    } else {
      setError(null);
      let array = students;

      console.log(array);
      array.push({
        id: uuid(),
        name: addStudent,
      });
      setStudents(array);
    }
    setAddStudent("");
  };

  const deleteStudent = (id) => {
    let filteredArray = students.filter((item) => item.id !== id);
    setStudents(filteredArray);
  };

  return (
    <section className="dashboard__wrapper">
      <span className="text__m-bold text__blue">Welkom, {teacher.surname}</span>
      <h1 className="title__m-bold">Start een nieuw spel</h1>
      <div className="spacer__m"></div>

      <Window2>
        {alert ? (
          <p style={{ color: "var(--blue)" }} className="title__s-bold">
            {alert}
          </p>
        ) : (
          ""
        )}
        {error ? (
          <p style={{ color: "var(--red)" }} className="title__s-bold">
            {error}
          </p>
        ) : (
          ""
        )}
        <p className="title__s-bold">Voeg leerlingen toe aan het spel</p>

        <form onSubmit={handleSubmitNewGame} className="form__newGame">
          <div className="new__form-container">
            <div className="label__wrapper">
              <label className="title__xs-bold" htmlFor="email">
                Klasnaam:
              </label>
              <input
                onChange={(e) => setName(e.currentTarget.value)}
                type="text"
                name="gamename"
                value={name}
                placeholder="2HAc"
                className="auth-input"
              />
            </div>

            <div className="label__wrapper">
              <label className="title__xs-bold" htmlFor="email">
                Leerlingen:
              </label>
              <div className="add__with-button">
                <input
                  onChange={(e) => setAddStudent(e.currentTarget.value)}
                  type="text"
                  name="students"
                  value={addStudent}
                  placeholder="Bert Meeuws"
                  className="auth-input"
                />

                <a
                  onClick={addStudentToList}
                  className="button__add title__s-bold"
                >
                  toevoegen
                </a>
              </div>
            </div>
          </div>

          <ul className="newGame-students">
            {students.map((item) => {
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
          <div className="newGame-link-container">
            <input
              type="text"
              value={link !== "" ? `${WEBSITE_URL}/game/${link}` : ""}
              readOnly
              className="h2 pixelated-font link-box"
            />
            <input
              type="submit"
              className="button__primary"
              value="Genereer link"
              style={{ marginRight: "2rem" }}
            />
            <a
              onClick={(e) => {
                navigator.clipboard.writeText(`${WEBSITE_URL}/game/${link}`);
                setError(null);
                setAlert("Uw link is gekopieerd");
              }}
              className="button__secondary"
            >
              {" "}
              Kopieer link
            </a>
          </div>
        </form>
      </Window2>
    </section>
  );
}
