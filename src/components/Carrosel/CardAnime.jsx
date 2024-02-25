import "../../assets/css/card.css";
import "../../assets/css/responsive/cardTablet.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";
import apiUser from "../../apiUser";

export default function CardAnime(props) {
  let redirect = `../${props.tipoIntegracao}/` + props.id;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lists, setLists] = useState([]);

  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
  };

  const addToListModal = () => {
    props.addToListModal();
  };

  const toggleMenu = () => {
    if (!sessionStorage.authToken) {
      props.loginModal();
    }
    apiUser
      .get(`/lists/listas-usuario?email=${sessionStorage.email}`)
      .then((response) => {
        console.log(response.data);
        setLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsMenuOpen(!isMenuOpen);
  };

  const addToSelectedList = (id) => {
    let idList;
    lists.forEach((e) => {
      if (props.tipoIntegracao == "mangas" && !id.includes("-manga")) {
        id = id + "-manga";
      }
      console.log(id);
      if (e.name == id) {
        idList = e.id;
      }
    });
    console.log(idList);
    apiUser
      .post(`/midia-lista/?idApi=${props.id}&idLista=${idList}`)
      .then((response) => {
        if (response.status == 201) {
          Swal.fire({
            title: "Adicionado na lista: " + id,
            icon: "success",
            showConfirmButton: false,
            timer: 1700,
            width: "24em",
            color: "#fff",
            background: "#000712",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menuStyle = {
    display: "flex",
    opacity: isMenuOpen ? 1 : 0,
  };

  const fontStyle = {
    display: isMenuOpen ? "flex" : "none",
  };

  const handleClick = () => {
    props.handleMidia(props.id, props.title);
  };

  return (
    <div className="cardContent">
      <div className="cardImage">
        <div className="image" style={cardStyle}>
          <div
            className="option-list"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className="container3">
              <Link
                className="go-pag"
                to={redirect}
                preventScrollReset={true}
              ></Link>
              <div className="pop-up" style={menuStyle}>
                <ul className="option-one" style={fontStyle}>
                  <li>
                    <span
                      className="icon progress"
                      title="Em progresso"
                      id="Em progresso"
                      onClick={(event) => addToSelectedList(event.target.id)}
                    >
                      <span className="tooltip">Em progresso</span>
                      <span className="fab fa-progress"></span>
                    </span>
                  </li>
                  <li
                    className="icon on-hold"
                    id="Em espera"
                    onClick={(event) => addToSelectedList(event.target.id)}
                  >
                    <span className="tooltip"> Em espera </span>
                  </li>
                  <li
                    className="icon on-plan"
                    id="No plano"
                    onClick={(event) => addToSelectedList(event.target.id)}
                  >
                    <span className="tooltip">No plano</span>
                    <img src="" alt="" />
                  </li>
                </ul>
                <ul className="option-one" style={fontStyle}>
                  <li
                    className="icon complete"
                    id="No plano"
                    onClick={(event) => addToSelectedList(event.target.id)}
                  >
                    <span className="tooltip">Completo</span>
                  </li>
                  <li
                    className="icon dropp"
                    id="Dropado"
                    onClick={(event) => addToSelectedList(event.target.id)}
                  >
                    <span className="tooltip">Dropado</span>
                  </li>
                  <li className="icon my-lists" onClick={handleClick}>
                    <span className="tooltip">Minhas listas</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu">
              <span>Em lançamento</span>
              <button className="add-list" onClick={toggleMenu}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="cardTitle">
        <span>{props.title}</span>
      </div>
    </div>
  );
}
