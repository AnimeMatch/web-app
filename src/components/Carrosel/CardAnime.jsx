import "../../assets/css/card.css";
import "../../assets/css/responsive/cardTablet.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ModalLogin from "../Modais/ModalLogin";
import ModalRegister from "../Modais/ModalRegister";
import Swal from "sweetalert2";
import apiUser from "../../apiUser";

export default function CardAnime(props) {
  let redirect = "../anime/" + props.id;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lists, setLists] = useState([]);

  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
  };

  const toggleMenu = () => {
    if (!sessionStorage.authToken) {
      setModal(!modal);
    }

    apiUser
      .get(`/lists/listas-usuario?email=${sessionStorage.email}`)
      .then((response) => {
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
      if (e.name == id) {
        idList = e.id;
      }
    });

    apiUser
      .post(`/anime-lista/?idApi=${props.id}&idLista=${idList}`)
      .then((response) => {
        console.log(response);
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

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const loginModal = () => {
    setModal(!modal);
  };
  const registerModal = () => {
    setModal2(!modal2);
  };
  const swap = () => {
    setModal(!modal);
    setModal2(!modal2);
  };

  return (
    <div className="cardContent">
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} />
      <ModalRegister modal={modal2} onClose={registerModal} onSwap={swap} />
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
                      id="Em andamento"
                      onClick={(event) => addToSelectedList(event.target.id)}
                    >
                      <span className="tooltip">Em progresso</span>
                      <span className="fab fa-progress"></span>
                    </span>
                  </li>
                  <li className="icon on-hold">
                    <span className="tooltip">Em espera</span>
                  </li>
                  <li className="icon on-plan">
                    <span className="tooltip">No plano</span>
                    <img src="" alt="" />
                  </li>
                </ul>
                <ul className="option-one" style={fontStyle}>
                  <li className="icon complete">
                    <span className="tooltip">Completo</span>
                  </li>
                  <li className="icon dropp">
                    <span className="tooltip">Dropado</span>
                  </li>
                  <li className="icon my-lists">
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
