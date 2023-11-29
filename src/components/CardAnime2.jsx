import "../assets/css/card.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import apiUser from "../apiUser";

export default function CardAnime2(props) {
  let redirect = "../anime/" + props.id;
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
  };

  const removeFromList = () =>{
    apiUser
    .delete(`/anime-lista/?animeListaId=${props.idList}`)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const menuStyle = {
    display: "flex",
    opacity: isMenuOpen ? 1 : 0,
  };

  const fontStyle = {
    display: isMenuOpen ? "flex" : "none",
  }


  return (
    <div className="cardContent">
      <div className="cardImage">
        <div className="image" style={cardStyle}>
          <div className="option-list" onMouseLeave={() => setIsMenuOpen(false)}>
            <div className="container3">
              <Link className="go-pag" to={redirect} preventScrollReset={true}></Link>
              <div className="pop-up" style={menuStyle}>
              </div>
            </div>
            <div className="menu">
              <span>Remover da Lista</span>
              <button className="add-list" onClick={removeFromList}></button>
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
