import { useEffect, useState } from "react";
import "../../../assets/css/statusBar.css";
import apiUser from "../../../apiUser";
import { Link } from "react-router-dom";

export default function StatusBar(props) {
  const [inProgress, setInProgress] = useState(0);
  const [complete, setComplete] = useState(0);
  const [onHold, setOnHold] = useState(0);
  const [drop, setDrop] = useState(0);
  const [plan, setPlan] = useState(0);
  const [inProgressId, setInProgressId] = useState(0);
  const [completeId, setCompleteId] = useState(0);
  const [onHoldId, setOnHoldId] = useState(0);
  const [dropId, setDropId] = useState(0);
  const [planId, setPlanId] = useState(0);

  useEffect(() => {
    apiUser
      .get(
        `/midia-lista//midias-e-listas-do-usuario?email=${sessionStorage.email}`
      )
      .then((response) => {
        let lists = response.data.filter(
          (list) => list.listaId.type === props.type
        );
        let completeCount = lists.filter(
          (list) => list.listaId.name === "Completo"
        ).length;
        let inProgressCount = lists.filter(
          (list) => list.listaId.name === "Em progresso"
        ).length;
        let onHoldCount = lists.filter(
          (list) => list.listaId.name === "Em espera"
        ).length;
        let planCount = lists.filter(
          (list) => list.listaId.name === "No plano"
        ).length;
        let dropCount = lists.filter(
          (list) => list.listaId.name === "Dropado"
        ).length;
        setComplete(completeCount);
        setInProgress(inProgressCount);
        setOnHold(onHoldCount);
        setPlan(planCount);
        setDrop(dropCount);
      })
      .catch((error) => {
        console.log(error);
      });

    const fetchData = async () => {
      try {
        const response = await apiUser.get(
          `/lists/listas-usuario?email=${sessionStorage.email}`
        );
        let l = response.data.filter((list) => list.type === props.type);

        if (props.type) {
          let id = l.filter((l) => l.name === "Completo")[0].id;
          let id1 = l.filter((l) => l.name === "Em progresso")[0].id;
          let id2 = l.filter((l) => l.name === "Em espera")[0].id;
          let id3 = l.filter((l) => l.name === "No plano")[0].id;
          let id4 = l.filter((l) => l.name === "Dropado")[0].id;

          setCompleteId(id);
          setInProgressId(id1);
          setOnHoldId(id2);
          setPlanId(id3);
          setDropId(id4);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="status-container">
        <Link to={"../list/" + inProgressId}>
          <div className="option">
            <div className="title">
              <div className="image progress"></div>
              <span>Em progresso</span>
            </div>
            <span>{inProgress}</span>
          </div>
        </Link>
        <Link to={"../list/" + completeId}>
            <div className="option">
            <div className="title">
                <div className="image complete"></div>
                <span>Completo</span>
            </div>
            <span>{complete}</span>
            </div>
        </Link>
        <Link to={"../list/" + onHoldId}>
            <div className="option">
            <div className="title">
                <div className="image on-hold"></div>
                <span>Em espera</span>
            </div>
            <span>{onHold}</span>
            </div>
        </Link>
        <Link to={"../list/" + dropId}>
            <div className="option">
            <div className="title">
                <div className="image dropp"></div>
                <span>Dropados</span>
            </div>
            <span>{drop}</span>
            </div>
        </Link>
        <Link to={"../list/" + planId}>
            <div className="option">
            <div className="title">
                <div className="image on-plan"></div>
                <span>No plano</span>
            </div>
            <span>{plan}</span>
            </div>
        </Link>
      </div>
    </>
  );
}
