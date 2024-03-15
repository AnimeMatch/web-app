import "../../../assets/css/cardCustom.css";
import apiUser from "../../../apiUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardListCustomizad(props) {
  const [displayList, setDisplayList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    apiUser
      .get(`/midia-lista/midias-da-lista?listaId=${props.id}`)
      .then((response) => {
        let displayList = [];
        let list = response.data;
        if (list) {
          list.forEach((e) => {
            if (displayList.length < 5) {
              displayList.push(e);
            }
          });
        }
        setDisplayList(displayList);
        setIsEmpty(displayList.length === 0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let redirect = "../list/" + props.id;

  return (
    <>
      <div className="card-container">
        <div className="title-type">
          <div className="name-list">
            <Link to={redirect}>
              <h3>{props.listName}</h3>
              <span>{props.type == 2 ? "Manga" : "Anime"}</span>
            </Link>
          </div>
          <Link
            to={props.type == 2 ? "../search/manga/" : "../search/anime/"}
            className="add-custom"
          ></Link>
        </div>
        <div className="card-list">
          {isEmpty ? (
            <Link
              to={props.type == 2 ? "../search/manga/" : "../search/anime/"}
              className="add-to-list-height"
            >
              <div className="add-to-list-card">
                <div className="add-list"></div>
                <span>Adicionar {props.type == 2 ? "Manga" : "Anime"}</span>
              </div>
            </Link>
          ) : (
            <>
              {displayList.length >= 1 && displayList[4] ? (
                <div
                  className={"nth-small"}
                  style={{
                    backgroundImage: `url(${displayList[4].imagem})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              ) : (
                <div
                  className={"nth-small"}
                  style={{
                    backgroundImage: `url()`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              )}
              {displayList.length >= 1 && displayList[1] ? (
                <div
                  className={"nth-mid"}
                  style={{
                    backgroundImage: `url(${displayList[1].imagem})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              ) : (
                <div
                  className={"nth-mid"}
                  style={{
                    backgroundImage: `url()`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              )}
              {displayList.length >= 1 && displayList[0] ? (
                <div
                  className={"nth-big"}
                  style={{
                    backgroundImage: `url(${displayList[0].imagem})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              ) : (
                <div
                  className={"nth-big"}
                  style={{
                    backgroundImage: `url()`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              )}
              {displayList.length >= 1 && displayList[2] ? (
                <div
                  className={"nth-mid"}
                  style={{
                    backgroundImage: `url(${displayList[2].imagem})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              ) : (
                <div
                  className={"nth-mid"}
                  style={{
                    backgroundImage: `url()`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              )}
              {displayList.length >= 1 && displayList[3] ? (
                <div
                  className={"nth-small"}
                  style={{
                    backgroundImage: `url(${displayList[3].imagem})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              ) : (
                <div
                  className={"nth-small"}
                  style={{
                    backgroundImage: `url()`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              )}
            </>
          )}
        </div>
        <div className="line"></div>
        <div className="profile-list">
          <div className="user">
            <div className="image"></div>
            <span>{sessionStorage.usuario}</span>
          </div>
          {/* <div className="interaction">
              <div className="btn-int">
                <button className="like"></button>
                <span>0</span>
              </div>
              <div className="btn-int">
                <button className="favorite"></button>
                <span>0</span>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
}
