import React, { useState } from "react";
import Window from "./Containers/Window";
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
    <section className="dashboard-newgame">
      
      <span className="text__m-bold text__blue">Welkom, {teacher.surname}</span>
      <h1 className="title__m-bold">Start een nieuw spel</h1>

      <Window>
        <form onSubmit={handleSubmitNewGame} className="form__newGame">
          <div className="newGame-input-container">
            <label htmlFor="gamename" className="p-small pixelated-font">
              Klasnaam:
            </label>
            <input
              type="text"
              className="p-small"
              value={name}
              name="gamename"
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
          </div>
          <div className="newGame-input-container">
            <label htmlFor="students" className="p-small pixelated-font">
              Leerlingen:
            </label>
            <div className="newGame-students-form">
              <input
                type="text"
                className="p-small newGame-students-form-input"
                name="students"
                value={addStudent}
                onChange={(e) => setAddStudent(e.currentTarget.value)}
              />
              <p
                onClick={addStudentToList}
                className="newGame-students-button p-big"
              >
                toevoegen
              </p>
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
              className="link-box pixelated-font link-button p-big"
              value="Genereer link"
            />
            <p className="link-box link-button pixelated-font p-big">
              Kopieer link
            </p>
          </div>
        </form>
      </Window>
    </section>
  );
}
