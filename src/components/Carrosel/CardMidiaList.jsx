import "../../assets/css/card.css";
import "../../assets/css/responsive/cardTablet.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";
import deletIcon from "../../assets/images/deafault/delete.svg";
import apiUser from "../../apiUser";

export default function CardMidiaList(props) {
  let redirect = `../${props.integracao}/` + props.id;

  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
  };

  const editStyle = {
    display: `${props.edit}`,
  };

  const removeFromList = () => {
    console.log(props.listId + " " + props.itemId);
    Swal.fire({
      title: `Excluir ${props.integracao} da lista?`,
      text: `Você irá deletar ${props.title} da sua lista.`,
      imageUrl: deletIcon,
      showCancelButton: true,
      cancelButtonColor: "#D5D5D5",
      confirmButtonColor: "#FFA800",
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar",
      width: "24em",
      color: "#fff",
      background: "#4641D9",
    }).then((result) => {
      if (result.isConfirmed) {
        apiUser
          .delete(`/midia-lista/?midiaListaId=${props.associativo}`)
          .then((response) => {
            if (response.status == 200) {
              Swal.fire({
                title: "Removido!",
                text: `Você removeu ${props.title}!`,
                icon: "success",
                width: "24em",
                color: "#fff",
                background: "#4641D9",
                showConfirmButton: false,
                timer: 1700,
              });
              props.refresh()
            }
          });
      }
    });
  };

  return (
    <div className="cardContent">
      <div className="cardImage">
        <div
          className="removeFromListHover"
          type="image"
          style={editStyle}
          onClick={removeFromList}
        ></div>
        <div className="blurRemove" style={editStyle}></div>
        <div className="image" style={cardStyle}>
          <Link
            className="go-pag"
            to={redirect}
            preventScrollReset={true}
          ></Link>
        </div>
      </div>
      <div className="cardTitle">
        <span>{props.title}</span>
      </div>
    </div>
  );
}
