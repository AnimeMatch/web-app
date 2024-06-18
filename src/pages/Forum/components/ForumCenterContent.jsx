import Topico from "./ForumTopico"
import { useState, useEffect } from "react";
import "../../../assets/css/forumCenterContent.css"
import apiUser from "../../../apiUser";

export default function CenterContent (props) {
    const [topicosPaginado, setTopicos] = useState()
    const [contentTopico, setContentTopico] = useState()

    useEffect(() => {
        const params = {
            page: 1,
            porPagina: 10,
          };
        apiUser
            .get(`/topicos/paginado`, { params })
            .then((response) => {
                setTopicos(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
            console.log(topicosPaginado)
    },[])

    function carregarTopico() {
        const params = {
            page: 1,
            porPagina: 10,
          };
        apiUser
            .get(`/topicos/paginado`, { params })
            .then((response) => {
                setTopicos(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
            console.log(topicosPaginado)
    }


    const handleContentChange = (event) => {
        setContentTopico(event.target.value);
    };

    function publicarTopico(){
        // TODO realizar a publicação post do tópico
        apiUser
        .post("/topicos", 
        {
            titulo: contentTopico,
            idMidia: 20931,
            usuario: {id: sessionStorage.id}
        })
        .then((response) => {
            console.log("\nTOPICO CRIADO\n")
            console.log(response)
            // card de requisição bem sucedida
        })
        .catch((error) => {
            console.log(`\nFALHA AO CRIAR TOPICO\n`)
            console.log(error.response)
            // card de requisição mal sucedida
        });
        carregarTopico()
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
                {topicosPaginado &&
                        topicosPaginado.topicos.map((item) => (
                            <Topico
                                key={item.topico.id}
                                id={item.topico.id}
                                name={item.topico.usuario.name}
                                content={item.topico.titulo}
                                userImage={item.topico.usuario.profileImage}
                                likes={item.likes}
                                comentarios={item.comentarios}
                            />
                        ))
                    }
            </div>
        </div>
        </>
    );  
}