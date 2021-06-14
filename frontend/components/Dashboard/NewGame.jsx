import React, { useState } from "react";
import Window from "./Containers/Window";
import Image from "next/image";
import { v4 as uuid } from "uuid";

export default function NewGame({ teacher }) {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const [addStudent, setAddStudent] = useState("");

  const [link, setAddLink] = useState("");

  const handleSubmitNewGame = (e) => {
    e.preventDefault();
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
      <p className="dashboard-newgame-welcome p blue bold">
        Welkom {teacher.surname}
      </p>
      <h1 className="h2">Maak een nieuw spel aan</h1>
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
                required
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
