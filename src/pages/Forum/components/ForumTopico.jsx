import "../../../assets/css/forumCenterContent.css"
import comentario_icon from "../../../assets/images/deafault/comentario_icon_forum.svg"
import like_icon from "../../../assets/images/deafault/favorito_coracao_icon.svg"

export default function Topico (props) {
    return (
        <>
        <div className="topico-body">
            <div className="top-topico">
                <div className="user-image-topico"
                  style={{background: (`url("${props.userImage}")`), 
                  backgroundSize: "cover"}} />
                <div className="topico-texts">
                    <div className="user-name-topico">{props.name}</div>
                    <div className="content-text-topico">{props.content}</div>
                    <div className="iteracoes-topico">
                        <div className="iteracoes-topico-item">
                            <img src={comentario_icon} alt="" />
                            <span>1</span>
                        </div>
                        <div className="iteracoes-topico-item">
                            <img src={like_icon} alt="" />
                            <span>100</span>
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