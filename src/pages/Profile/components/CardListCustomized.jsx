import "../../../assets/css/cardCustom.css";
import apiUser from "../../../apiUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardListCustomizad(props) {
  const [getList2, setList2] = useState([]);

  useEffect(() => {
    apiUser
      .get(`/anime-lista/animes-da-lista?listaId=${props.id}`)
      .then((response) => {
        console.log(response.data);

        const dataAsArray = Array.isArray(response.data)
          ? response.data
          : [response.data];

        setList2(dataAsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let redirect = "../list/" + props.id;

  return (
    <>
      <Link to={redirect} className="card-container">
        <div className="card-container">
          <div className="title-type">
            <div className="name-list">
              <h3>{props.listName}</h3>
              <span>Tipo</span>
            </div>
            <div className="add-custom"></div>
          </div>

          <div className="card-list"></div>
          <div className="line"></div>
          <div className="profile-list">
            <div className="user">
              <div className="image"></div>
              <span>{sessionStorage.usuario}</span>
            </div>
            <div className="interaction">
              {/* <div className="btn-int">
              <button className="like"></button>
              <span>0</span>
            </div>
            <div className="btn-int">
              <button className="favorite"></button>
              <span>0</span>
            </div> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

{
  /* <div
key={0}
className={index === 0 ? "nth-small" : ""}
style={{
  backgroundImage: `url(${anime.imagem})`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
}}
></div>
<div
key={1}
className={index === 1 ? "nth-mid" : ""}
style={{
  backgroundImage: `url(${anime.imagem})`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
}}
></div>
<div
key={2}
className={index === 2 ? "nth-big" : ""}
style={{
  backgroundImage: `url(${anime.imagem})`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
}}
></div>
<div
key={3}
className={index === 3 ? "nth-mid" : ""}
style={{
  backgroundImage: `url(${anime.imagem})`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
}}
></div>
<div
key={4}
className={index === 4 ? "nth-small" : ""}
style={{
  backgroundImage: `url(${anime.imagem})`,
  backgroundSize: `cover`,
}}
></div> */
}
