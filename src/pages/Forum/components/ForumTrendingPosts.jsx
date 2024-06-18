import { useState, useEffect } from "react";
import Post from "./ForumPosts"
import "../../../assets/css/trendingPosts.css"
import apiUser from "../../../apiUser";

export default function PostsTrend () {
    const [postsTrend, setPostsTrend] = useState()
    const [topicosPaginado, setTopicos] = useState()

    useEffect(() => {
        const params = {
            page: 1,
            porPagina: 10,
          };
        apiUser
            .get(`/topicos/most-liked`, { params })
            .then((response) => {
                setPostsTrend(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
            console.log(postsTrend)
    },[])

    // useEffect(() => {
    //     apiUser
    //         .get(``)
    //         .then((response) => {
    //           setPostsTrend(response.data);
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //   },[])

    return (
        <>
        <div className="body-trending-post">
            <div className="area-trending-post">
                <span className="title-posts">Posts em alta</span>
                <div className="posts-forum">
                    {postsTrend &&
                        postsTrend.topicos.map((item) => (
                            <Post
                                name={item.topico.usuario.name}
                                content={item.topico.titulo}
                                // userImage={sessionStorage.profileImage}
                                userImage={item.topico.usuario.profileImage}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    );  
}