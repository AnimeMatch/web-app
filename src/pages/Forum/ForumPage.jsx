// import Banner from "../Home/components/Banner";
import SideMenu from "./components/ForumSideMenu";
import CenterContent from "./components/ForumCenterContent";
import TrendingPosts from "./components/ForumTrendingPosts"
import "../../assets/css/forum.css"
import { useState, useEffect } from "react";
import apiUser from "../../apiUser";

export default function ForumPag() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    profileImage: "",
  });
  
  useEffect(() => {
    apiUser
        .get(`/users/user?email=${sessionStorage.email}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  },[])
  return (
    <>{sessionStorage.email
      &&
      <div className="forum-page-body">
        <SideMenu
          profileImage={user.profileImage}
          name={user.name}
        />
        <CenterContent
          profileImage={user.profileImage}
          name={user.name}
        />
        <TrendingPosts/>
      </div>
    }
    </>
  );
}
