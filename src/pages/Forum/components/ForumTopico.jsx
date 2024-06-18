import "../../../assets/css/forumCenterContent.css"
import comentario_icon from "../../../assets/images/deafault/comentario_icon_forum.svg"
import likeIcon from "../../../assets/images/deafault/favorito_coracao_icon.svg"
import likeIconPreenchido from "../../../assets/images/deafault/favorito_coracao_icon_preenchido_branco.png"
import apiUser from "../../../apiUser";
import { useState, useEffect } from "react";

export default function Topico (props) {
    const [likeImage, setLikeImage] = useState()
    const [likeCount, setLikeCount] = useState(props.likes)

    useEffect(() => {
        // setLikeImage(likeIcon)
        apiUser
        .post(`/topicos/isLiked?idTopico=${props.id}&email=${sessionStorage.email}`)
        .then((response) => {
            if (response.data == true){
                setLikeImage(likeIconPreenchido)
            } else if (response.data == false) {
                setLikeImage(likeIcon)
            console.log(`LIKE REALIZADO: ${response.content}`)
            } else {
                console.log(`ERRO ao dar like. detalhes: ${response.content}`)
            }
        })
        .catch((error) => {
            console.log(`\nFALHA AO EDITAR USUÁRIO. ERRO:\n`)
            console.log(error.response)
            // card de requisição mal sucedida
        });
    })

    function darLike(){
        apiUser
        .post(`/topicos/darLike?idTopico=${props.id}&email=${sessionStorage.email}`)
        .then((response) => {
            if (response.status == 200){
                setLikeImage(likeIcon)
                setLikeCount(likeCount - 1)
            } else if (response.status == 201) {
                setLikeImage(likeIconPreenchido)
                setLikeCount(likeCount + 1)
            console.log(`LIKE REALIZADO: ${response.content}`)
            } else {
                console.log(`ERRO ao dar like. detalhes: ${response.content}`)
            }
        })
        .catch((error) => {
            console.log(`\nFALHA AO EDITAR USUÁRIO. ERRO:\n`)
            console.log(error.response)
            // card de requisição mal sucedida
        });
    }

    return (
        <>
        <div className="topico-body">
            <div className="top-topico">
                <div className="user-image-topico"
                  style={{backgroundImage: (`url("${props.userImage}")`), 
                  backgroundSize: "cover"}} />
                <div className="topico-texts">
                    <div className="user-name-topico">{props.name}</div>
                    <div className="content-text-topico">{props.content}</div>
                    <div className="iteracoes-topico">
                        <div className="iteracoes-topico-item">
                            <img src={comentario_icon} alt="" />
                            <span>{props.comentarios}</span>
                        </div>
                            <div className="iteracoes-topico-item" onClick={darLike}>
                                <img src={likeImage} alt="" style={{width: 20}}/>
                                <span>{likeCount}</span>
                            </div>
                    </div>
                </div>
            </div>
            {/* <div className="image-topico">
                # TODO Permitir que o usuário possa integrar imagens aos posts
            </div> */}
        </div>
        </>
    );  
}