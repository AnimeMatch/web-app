import { useState, useEffect } from "react";
import Post from "./ForumPosts"
import "../../../assets/css/trendingPosts.css"
import apiUser from "../../../apiUser";

export default function PostsTrend () {
    const [postsTrend, setPostsTrend] = useState([{
        name: "Josias Hatake",
        content: "comentário aleatório",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg"
    },
    {
        name: "Kakashi ratão",
        content: "Mui bueno",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b130050-qsLThJs5VIbz.png"
    },
    {
        name: "Ichigo",
        content: "Eu sabo",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg"
    },
    {
        name: "Ichigo",
        content: "Eu sabo",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b137773-N4O52f73dJKZ.png"
    },
    {
        name: "Lá chica",
        content: "teste aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b40595-WWFvfCf4C8If.jpg"
    },
    {
        name: "Ichigo",
        content: "Eu sabo",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg"
    },
    {
        name: "Ichigo",
        content: "Eu sabo",
        profileImage: "https://s4.anilist.co/file/anilistcdn/character/large/b40882-dsj7IP943WFF.jpg"
    }
    ])

    useEffect(() => {
        apiUser
            .get(``)
            .then((response) => {
              setPostsTrend(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
      },[])

    return (
        <>
        <div className="body-trending-post">
            <div className="area-trending-post">
                <span className="title-posts">Posts em alta</span>
                <div className="posts-forum">
                    {postsTrend &&
                        postsTrend.map((item) => (
                            <Post
                                name={item.name}
                                content={item.content}
                                // userImage={sessionStorage.profileImage}
                                userImage={item.profileImage}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    );  
}