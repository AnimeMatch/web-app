import { useState, useEffect } from "react";
import Post from "./ForumPosts"
import "../../../assets/css/trendingPosts.css"
import apiUser from "../../../apiUser";

export default function PostsTrend () {
    const [postsTrend, setPostsTrend] = useState()

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
        <div className="body-thrending-post">
            <span className="title-posts">Posts em alta</span>
            <div>
                {postsTrend &&
                    postsTrend.map((item) => (
                        <Post
                            name={item.name}
                            content={item.content}
                            userImage={sessionStorage.profileImage}
                        />
                    ))
                }
            </div>
        </div>
        </>
    );  
}