import React, { useState } from "react";
import Window from "./Containers/Window";
import Image from "next/image";
import { v4 as uuid } from "uuid";

export default function NewGame() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const [addStudent, setAddStudent] = useState("");

  const handleSubmitNewGame = (e) => {
    e.preventDefault();
  };

  const addStudentToList = (e) => {
    e.preventDefault();
    setStudents(...students, {
      id: uuid(),
      name: addStudent,
    });
    setAddStudent("");
  };

  return (
    <section className="dashboard-newgame">
      <p className="dashboard-newgame-welcome p blue bold">Welkom NAME HERE</p>
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
                className="p-small"
                name="students"
                value={addStudent}
                onChange={(e) => setAddStudent(e.currentTarget.value)}
                required
              />
              <p
                onClick={(e) => addStudentToList}
                className="newGame-students-button p-big"
              >
                toevoegen
              </p>
            </div>
          </div>
          <ul className="newGame-students">
            <div className="newGame-student-item">
              <p className="pixelated-font p-big">Hi</p>
              <Image src="/assets/img/delete.svg" width={15} height={15} />
            </div>
            <div className="newGame-student-item">
              <p className="pixelated-font p-big">Hi</p>
              <Image src="/assets/img/delete.svg" width={15} height={15} />
            </div>

            {students.map((item) => {
              return (
                <div className="newGame-student-item">
                  <p className="pixelated-font p-big">{item.name}</p>
                  <Image src="/assets/img/delete.svg" width={15} height={15} />
                </div>
              );
            })}
          </ul>
        </form>
      </Window>
    </section>
  );
}
