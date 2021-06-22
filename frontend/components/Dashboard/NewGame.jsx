import React, { useState } from "react";
import Window2 from "./Containers/Window2";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { API_URL } from "../../constants/index";

export default function NewGame({ teacher }) {
  
  const { id } = teacher;

  const [name, setName] = useState("");

  const [students, setStudents] = useState([]);
  const [addStudent, setAddStudent] = useState("");

  const [link, setAddLink] = useState("");

  const handleSubmitNewGame = async (e) => {
    e.preventDefault();
    if (name === "" || students === []) {
      alert("Laat de velden niet leeg");
    } else {
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
        } catch (e) {
          console.log("Error creating student");
        }
      } catch (e) {
        console.log("Error creating game");
        console.log(e);
      }
    }
  };

  const addStudentToList = (e) => {
    e.preventDefault();
    if (students === "") {
      alert("Het veld leerling niet leeglaten");
    } else {
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
        
        <p className="title__s-bold">Voeg leerlingen toe aan het spel</p>
        
        <form onSubmit={handleSubmitNewGame} className="form__newGame">

          <div className="new__form-container">
            <div className="label__wrapper">
                <label className="title__xs-bold" htmlFor="email">
                  Klasnaam:
                </label>
                <input
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
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

                  <a onClick={addStudentToList} className="button__add title__s-bold">toevoegen</a>
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
              value={link}
              readOnly
              className="h2 pixelated-font link-box"
            />
            <input
              type="submit"
              className="button__primary"
              value="Genereer link"
            />
            <a className="button__secondary"> Kopieer link</a>
          </div>
        </form>
      </Window2>
    </section>
  );
}
