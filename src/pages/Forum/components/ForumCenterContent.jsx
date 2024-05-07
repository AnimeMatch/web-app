import Topico from "./ForumTopico"
import { useState, useEffect } from "react";
import "../../../assets/css/forumCenterContent.css"
import apiUser from "../../../apiUser";

export default function CenterContent (props) {
    const [topicos, setTopicos] = useState([])
    const [contentTopico, setContentTopico] = useState()

    useEffect(() => {
        apiUser
            .get(`/topicos`)
            .then((response) => {
                setTopicos(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
    },[])

    const handleContentChange = (event) => {
        setContentTopico(event.target.value);
    };

    function publicarTopico(){
        // TODO realizar a publicação post do tópico
        apiUser
        .post("/topicos", 
        {
            titulo: contentTopico,
            idMidia: profileImageUpdate,
            genero: generoUpdate,
            bio: bioUpdate
        })
        .then((response) => {
            console.log("\nUSER EDITADO COM SUCESSO\n")
            console.log(response)
            // card de requisição bem sucedida
        })
        .catch((error) => {
            console.log(`\nFALHA AO EDITAR USUÁRIO. ERRO:\n`)
            console.log(error.response)
            // card de requisição mal sucedida
        });
    }

    return (
        <>
        <div className="center-body">
            <div className="center-body-title">Posts</div>
            <div className="coment-area-topico">
                <div className="commentario-postar">
                    {/* <img src={props.profileImage} alt="" /> */}
                    <img src={"https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg"} alt="" />
                    <textarea placeholder="Digite aqui..." 
                    id="" 
                    cols="62" 
                    rows="5"
                    maxLength={200}
                    onChange={handleContentChange}></textarea>
                </div>
                <div className="comentario-postar-buttom">
                    <button onClick={() =>
                        publicarTopico()}>
                        Postar
                    </button>
                </div>
            </div>
            <div className="topicos-column">
                {topicos &&
                        topicos.map((item) => (
                            <Topico
                                name={item.usuario.name}
                                content={item.titulo}
                                userImage={item.usuario.profileImage}
                            />
                        ))
                    }
            </div>
        </div>
        </>
    );  
}