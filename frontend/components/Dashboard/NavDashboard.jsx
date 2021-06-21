import React from "react";
import { signOut } from "next-auth/client";

export default function NavDashboard({ setId, id }) {
  return (
    <nav className="nav__dashboard-container">
      <ul className="nav__dashboard-list">
        <div className="nav__dashboard-top">
          {id === 2 || id === 3 ? (
            <>
              <a
                onClick={(e) => setId(1)}
                className="button__secondary nav__dashboard-button"
              >
                terug naar spellen
              </a>
              <a
                onClick={(e) => setId(3)}
                className={`${
                  id === 3 ? "button__primary" : "button__secondary"
                } nav__dashboard-button`}
              >
                leerlingen
              </a>
            </>
          ) : (
            <>
              <a
                onClick={(e) => setId(1)}
                className={`${
                  id === 1 ? "button__primary" : "button__secondary"
                } nav__dashboard-button`}
              >
                overzicht
              </a>
              <a
                onClick={(e) => setId(0)}
                className={`${
                  id === 0 ? "button__primary" : "button__secondary"
                } nav__dashboard-button`}
              >
                nieuw spel
              </a>
            </>
          )}
        </div>
        <a
          onClick={(e) => signOut()}
          className="button__cancel nav__dashboard-button"
        >
          afmelden
        </a>
      </ul>
    </nav>
  );
}

// <div className="nav__grid">
//   <nav className="nav__dashboard">
//     <ul className="nav__dashboard__list">
//       {id === 2 || id === 3 ? (
//         <>
//           <li
//             onClick={(e) => setId(1)}
//             className={`nav__dashboard__list-item p-small ${
//               id === 1 ? "nav__dashboard-active" : ""
//             }`}
//           >
//             terug naar spellen
//           </li>
//           <li
//             onClick={(e) => setId(3)}
//             className={`nav__dashboard__list-item p-small ${
//               id === 3 ? "nav__dashboard-active" : ""
//             }`}
//           >
//             leerlingen
//           </li>
//         </>
//       ) : (
//         <>
//           <li
//             onClick={(e) => setId(1)}
//             className={`button__primary ${
//               id === 1 ? "button__primary" : ""
//             }`}
//           >
//             overzicht
//           </li>
//           <li
//             onClick={(e) => setId(0)}
//             className={`button__secondary ${
//               id === 0 ? "button__primary " : ""
//             }`}
//           >
//             nieuw spel
//           </li>
//         </>
//       )}

//       <li
//         onClick={(e) => signOut()}
//         className="button__cancel nav__dashboard__list-signOff"
//       >
//         afmelden
//       </li>
//     </ul>
//   </nav>
// </div>
// );
