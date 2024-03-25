import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiUser from "../../../apiUser";
import Swal from "sweetalert2";

export default function CommentArea(props) {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await apiUser.get(
          `/comentarios-animes/${props.midiaId}/lista_comentarios_animes`
        );
          console.log(response)
        if (response.status !== 200) {
          setComments([]);
        } else {
          setComments(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setComments([]);
        } else {
          console.log(error);
        }
      }
    };

    fetchComments();
  }, [id, reload]);

  const newComment = () => {
    Swal.fire({
      title: "Adicionar um novo comentario?",
      text: "Escreva o nome da nova lista!",
      input: "textarea",
      showCancelButton: true,
      cancelButtonColor: "#D5D5D5",
      confirmButtonColor: "#FFA800",
      confirmButtonText: "Comentar",
      cancelButtonText: "Cancelar",
      width: "32em",
      color: "#fff",
      background: "#4641D9",
    }).then((result) => {
      if (result.isConfirmed) {
        const text = result.value;
        if (text.trim() !== "") {
          apiUser
            .post(`/comentarios-animes/${props.midiaId}`, {
              texto: text,
              dataComentarioAnime: new Date(),
              emailUsuario: sessionStorage.email,
            })
            .then((response) => {
              if (response.status == 201) {
                Swal.fire({
                  title: "Nova comentario adicionada com sucesso!",
                  icon: "success",
                  width: "24em",
                  color: "#fff",
                  background: "#000712",
                  confirmButtonColor: "#FFA800",
                });
                handleReload();
              }
            })
            .catch((error) => {
              console.error("Erro ao adicionar lista:", error);
            });
        } else {
          // Caso o usuário não tenha inserido nenhum texto
          Swal.fire({
            title: "Erro!",
            text: "Você prêcisa digitar algo.",
            icon: "error",
            background: "#000712",
            confirmButtonColor: "#FFA800",
            width: "24em",
            color: "#fff",
          });
        }
      }
    });
  };

  return (
    <>
      <div className="commentTitleSection">
        <span className="commentTitle">Comentarios</span>
        <button className="btn-secundary" onClick={newComment}>
          Comentar
        </button>
      </div>
      <div className="line"></div>
      <div className="comments">
        {comments.map((item, index) => (
          <Comment
            key={index}
            name={item.usuarioSimplesDto.name}
            image={item.usuarioSimplesDto.profileImage}
            replies={item.qtdComentariosFilhos}
            text={item.texto}
            date={item.data}
            liked={item.qtdLikes}
            desliked={item.qtdDeslikes}
          />
        ))}
      </div>
    </>
  );
}
