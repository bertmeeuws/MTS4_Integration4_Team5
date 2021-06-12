import Dag1 from "../components/Dag1/Dag1";
import Dag1_1 from "../components/Dag1/Dag1_1";
import Dag1_2 from "../components/Dag1/Dag1_2";
import Dag1_3 from "../components/Dag1/Dag1_3";
import Dag1_4 from "../components/Dag1/Dag1_4";
import Dag1_5 from "../components/Dag1/Dag1_5";
import Dag1_6 from "../components/Dag1/Dag1_6";
import Dag1_7 from "../components/Dag1/Dag1_7";
import Dag1_8 from "../components/Dag1/Dag1_8";
import Dag1_9 from "../components/Dag1/Dag1_9";

const startIndex = 5;

/*
const renderRoutes = () => {
  let array = [];
  for (let i = startIndex; i >= 15; i++) {
    array.push({
      id: i === startIndex ? 5 : i + 1,
      name: "Dag 1",
      component:
        i === startIndex ? <Dag1 title={"Dag 1"} /> : <Dag1 title={"Dag 1"} />,
    });
  }
};
*/

export const Dag1Routes = [
  {
    id: 5,
    name: "Dag 1",
    component: <Dag1 route={5} title={"Dag 1"} />,
  },
  {
    id: 6,
    name: "Dag 1",
    component: <Dag1_1 route={6} title={"Dag 1"} />,
  },
  {
    id: 7,
    name: "Dag 1",
    component: <Dag1_2 route={7} title={"Dag 1"} />,
  },
  {
    id: 8,
    name: "Dag 1",
    component: <Dag1_3 route={8} title={"Dag 1"} />,
  },
  {
    id: 9,
    name: "Dag 1",
    component: <Dag1_4 route={9} title={"Dag 1"} />,
  },
  {
    id: 10,
    name: "Dag 1",
    component: <Dag1_5 route={10} title={"Dag 1"} />,
  },
  {
    id: 11,
    name: "Dag 1",
    component: <Dag1_6 route={11} title={"Dag 1"} />,
  },
  {
    id: 12,
    name: "Dag 1",
    component: <Dag1_7 route={12} title={"Dag 1"} />,
  },
  {
    id: 13,
    name: "Dag 1",
    component: <Dag1_8 route={13} title={"Dag 1"} />,
  },
  {
    id: 14,
    name: "Dag 1",
    component: <Dag1_9 route={14} title={"Dag 1"} />,
  },
];
