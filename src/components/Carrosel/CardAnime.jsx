import "../../assets/css/card.css";
import "../../assets/css/responsive/cardTablet.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function CardAnime(props) {
  let redirect = `../${props.tipoIntegracao}/` + props.id;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
  };

  const toggleMenu = () => {
    if (!sessionStorage.authToken) {
      props.loginModal();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle = {
    display: "flex",
    opacity: isMenuOpen ? 1 : 0,
  };

  const fontStyle = {
    display: isMenuOpen ? "flex" : "none",
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
                    <span className="icon progress" title="Em progresso">
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
