import React, { useEffect, useState } from "react";
import Window2 from "./Containers/Window2";
import axios from "axios";
import { API_URL } from "../../constants";
import Pop from "./Pop";

export default function Game({ teacher, game }) {
  const { id } = teacher;

  const [popup, setPopup] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(`${API_URL}/games?id=${game}`);
    if (response?.data) {
      const students = response?.data[0]?.students;
      let studentsWithPoints = [];
      for (let student of students) {
        try {
          const response = await axios.get(
            `${API_URL}/students/${student?.id}`
          );
          studentsWithPoints.push({
            ...student,
            points: response?.data?.points,
          });
        } catch (e) {
          console.log(e);
        }
      }
      let finalData = response?.data[0];
      finalData.students = studentsWithPoints;

      setData(finalData);
    }
    setLoading(false);
  }, []);

  const renderAvgFollowers = () => {
    let sum = 0;
    const allStudentsAndLatestPoints = data.students.map(({ name, points }) => {
      return {
        name,
        latestPoints: points?.[points?.length - 1]?.followers
          ? points?.[points?.length - 1]?.followers
          : 0,
      };
    });
    console.log(allStudentsAndLatestPoints);

    allStudentsAndLatestPoints.map((student) => {
      sum += student.latestPoints;
    });
    return Math.round(sum / data?.students?.length);
  };

  const renderTopStudents = (order) => {
    console.log(data);
    const allStudentsAndLatestPoints = data.students.map(({ name, points }) => {
      return {
        name,
        latestPoints: points?.[points?.length - 1]?.followers
          ? points?.[points?.length - 1]?.followers
          : 0,
      };
    });
    if (order === "ASC") {
      return allStudentsAndLatestPoints.sort(function (a, b) {
        return a.latestPoints + b.latestPoints;
      });
    }
    if (order === "DESC") {
      return allStudentsAndLatestPoints.sort(function (a, b) {
        return a.latestPoints - b.latestPoints;
      });
    }
  };

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <section className="dashboard__wrapper">
      {popup ? <Pop setPopup={setPopup} game={game} /> : ""}
      <p className="dashboard-newgame-welcome p blue bold">Aangemaakt spel</p>
      <h1 className="h2">
        {data.name} - {new Date(data.published_at).toLocaleDateString("be-nl")}
      </h1>

      <p className="dashboard-game-subtitle pixelated-font">statistieken</p>
      <div className="dashboard-game-circle-containers">
        <div className="dashboard-game-circle">
          <p className="pixelated-font h2">{renderAvgFollowers()}</p>
          <p className="p-small">Gem. volgers</p>
        </div>
        <div className="dashboard-game-circle">
          <p className="pixelated-font h2">{data.students.length}</p>
          <p className="p-small">Studenten</p>
        </div>
        <div onClick={(e) => setPopup(true)} className="dashboard-game-circle">
          <p className="pixelated-font h2">Privé</p>
          <p className="p-small"></p>
        </div>
      </div>
      <p className="dashboard-game-subtitle pixelated-font">topscores</p>
      <div className="dashboard-game-scores">
        <Window2>
          <p className="pixelated-font">Leerlingen met de meeste volgers</p>
          {renderTopStudents("ASC").map((item, key) => {
            if (key < 3) {
              return (
                <div className="student-row">
                  <p>{item?.name}</p>
                  <p className="pixelated-font">{item?.latestPoints}</p>
                </div>
              );
            }
          })}
        </Window2>
        <Window2>
          <p className="pixelated-font">Leerlingen met de minste volgers</p>
          {renderTopStudents("DESC").map((item, key) => {
            if (key < 3) {
              return (
                <div className="student-row">
                  <p>{item?.name}</p>
                  <p className="pixelated-font">{item?.latestPoints}</p>
                </div>
              );
            }
          })}
        </Window2>
      </div>
    </section>
  );
}
