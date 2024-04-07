import like from "../assets/images/deafault/gostar(1) 1.svg";
import deslike from "../assets/images/deafault/desgostar(1) 1.svg";
import chat from "../assets/images/deafault/bate-papo 2.svg";
import x from "../assets/images/deafault/X.svg";
import "../assets/css/commentsWithReplies.css";
import apiUser from "../apiUser";
import { useEffect, useState } from "react";

export default function ModalReplies(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
    coverImage: "",
    criacao: "",
    genero: "",
    bio: "",
  });
  const [reload, setReload] = useState(false);

  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiUser.get(
          `/users/user?email=${sessionStorage.email}`
        );

        const reponse2 = await apiUser.get(
          `/comentarios-animes/${props.id}/lista_comentarios_filhos`
        );
        console.log(reponse2.data);
        setReplies(reponse2.data);
        setUser(response.data);
      } catch {}
    };
    fetchData();
  }, [reload]);

  const handleLike = () => {
    apiUser.patch(`/comentarios-animes/like/${props.id}`).then((response) => {
      if (response.status == 200) {
        props.reload();
      }
    });
  };

  const handleDeslike = () => {
    apiUser
      .patch(`/comentarios-animes/deslike/${props.id}`)
      .then((response) => {
        if (response.status == 200) {
          props.reload();
        }
      });
  };

  const handleState = () => {
    props.changeState();
  };

  const sendResponse = () => {
    apiUser
      .post(`/comentarios-animes/${props.id}/comentar_comentario`, {
        texto: document.getElementById("comment_reponse_ipt").value,
        dataComentarioAnime: new Date(),
        emailUsuario: sessionStorage.email,
      })
      .then((response) => {
        setReload(!reload);
        console.log(response);

        comment_reponse_ipt.value = "";
      });
  };

  return (
    <>
      {props.state && (
        <div className="modal-content-replies">
          <div className="overlay-modal-content-replies"></div>
          <div className="content-replies">
            <div className="info-user">
              <div className="info-user-left">
                <div className="circle-image">
                  <img src={props.image} alt="" />
                </div>
                <span className="">{props.name}</span>
              </div>
              <div className="infor-user-right">
                <img
                  className="close-button"
                  src={x}
                  alt=""
                  onClick={handleState}
                />
              </div>
            </div>
            <div className="main-comment">
              <div className="separation-line"></div>
              <div className="main-comment-text">
                <span>{props.text}</span>
              </div>
              <div className="separation-line"></div>
              <div className="comment-reviews">
                <div className="comment-like" onClick={handleLike}>
                  <img src={like} alt="" />
                  <span className="comment-like-total">{props.liked}</span>
                </div>
                <div className="comment-deslike" onClick={handleDeslike}>
                  <img src={deslike} alt="" />
                  <span className="comment-deslike-total">
                    {props.desliked}
                  </span>
                </div>
                <div className="comment-childrens">
                  <img src={chat} alt="" />
                  <span className="comment-childrens-total">
                    {props.replies}
                  </span>
                </div>
              </div>
              <div className="separation-line"></div>
              <div className="comment-reponse-area">
                <div className="circle-image">
                  <img src={user.profileImage} alt="" />
                </div>
                <input
                  type="textarea"
                  id="comment_reponse_ipt"
                  placeholder="Postar sua resposta"
                />
                <button className="btn-secundary" onClick={sendResponse}>
                  Reponder
                </button>
              </div>
            </div>
            <span>Respostas:</span>
            <div className="replies-area">
              {replies &&
                replies.map((item, index) => (
                  <>
                    <div className="replie-area" key={index}>
                      <div className="replie-user-info">
                        <div className="circle-image">
                          <img src={item.usuarioSimplesDto.profileImage} />
                        </div>
                        <span className="">{item.usuarioSimplesDto.name}</span>
                      </div>
                      <div className="replies-text">
                        <span>{item.texto}</span>
                      </div>
                    </div>
                    <div className="separation-line"></div>
                  </>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
