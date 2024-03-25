import Topico from "./ForumTopico"
import { useState, useEffect } from "react";
import "../../../assets/css/centerContent.css"
import apiUser from "../../../apiUser";

export default function CenterContent () {
    const [topicos, setTopicos] = useState([{
        titulo: "Shibuia pocou nessa season",
        usuario: {
            name: "Satoru de Chique Chique",
            profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg"
        }
    }])

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

    return (
        <>
        <div className="center-body">
            <span>Post</span>
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