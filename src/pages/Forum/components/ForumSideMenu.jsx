import "../../../assets/css/forumSideMenu.css"
import search from "../../../assets/images/deafault/search.svg";
import sair from "../../../assets/images/logos/sair.svg"
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";

export default function SideMenu () {
    const [user, setUser] = useState({
        id: "",
        name: "",
        profileImage: "",
    });
    const [searchValue, setSearchValue] = useState("");

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
          searchFunc(searchValue);
        }
    };

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
        <>
        <div className="body-side-menu-forum">

        </div>
        <div className="top-elements">
            <div className="user-info">
                <div className="side-menu-user-image"
                  style={{background: (`url("${user.profileImage}")`), 
                  backgroundSize: "cover"}} />
                <span value={user.name}></span>
            </div>
            <div className="search-bar">
                <img src={search} alt="busca"/>
                <input type="text" name="" id="" />
            </div>
            <div className="search-bar">
            <input
                type="text"
                name=""
                placeholder="Pesquisar"
                id="input-profile"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            </div>
            <div>
                <div>
                    <img src="" alt="home_icon"/>
                    <span>Home</span>
                </div>
                <div>
                    <img src="" alt="perfil_icon"/>
                    <span>Perfil</span>
                </div>
                <div>
                    <img src="" alt="config_icon"/>
                    <span>Gerenciar conta</span>
                </div>
            </div>
        </div>
        <div className="button-exit">
            <img src={sair} alt="exit_door" />
            <span>Sair</span>
        </div>
        </>
    );  
}