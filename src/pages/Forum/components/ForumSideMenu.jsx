import "../../../assets/css/forumSideMenu.css"
import search from "../../../assets/images/deafault/search.svg";
import sair from "../../../assets/images/logos/sair.svg"
import config from "../../../assets/images/logos/configuracao.svg"
import userImage from "../../../assets/images/deafault/userIcon.svg"
import iconImage from "../../../assets/images/logos/Icone.svg"
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";

export default function SideMenu (props) {
    // const [user, setUser] = useState({
    //     id: "",
    //     name: "",
    //     profileImage: "",
    // });
    const [searchValue, setSearchValue] = useState("");

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
          searchFunc();
        }
    };

    function searchFunc(){
        // TODO buscar (?) (tem que buscar alguma coisa que não sei, mas tá no figma) 
    }
    
    
    return (
        <>
        <div className="body-side-menu-forum">
            <div className="box-organize-elements">
                <div className="top-elements">
                    <div className="user-info">
                    {props.profileImage ? (
                        <div className="side-menu-user-image"
                        style={{background: (`url("${props.profileImage}")`), 
                        // style={{background: (`url("${user.profileImage}")`), 
                        backgroundSize: "cover"}} />
                    ):(<></>)}
                        {/* <span value={user.name}></span> */}
                        <div className="username-side-menu-forum">{props.name}</div>
                    </div>
                    <div className="search-bar">
                        {/* <div className="input-search-profile">
                            <div
                                className="search-button-perfil"
                                onClick={() =>
                                searchByName(document.getElementById("input-profile").value)
                                }>
                                <img src={search} alt="" id="input-image" />
                            </div>
                            <input
                                type="text"
                                name=""
                                placeholder="Pesquisar"
                                id="input-profile"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={handleEnterKeyPress}
                            />
                        </div> */}
                    </div>
                   
                    <div className="side-menu-navigation-buttons">
                        <div className="side-menu-button">
                            <img src={userImage} alt="home_icon"/>
                            <span>Home</span>
                        </div>
                        <div className="side-menu-button">
                            <img src={userImage} alt="perfil_icon"/>
                            <span>Perfil</span>
                        </div>
                        <div className="side-menu-button">
                            <img src={config} alt="config_icon"/>
                            <span>Gerenciar conta</span>
                        </div>
                    </div>
                </div>
                <div className="side-menu-exit">
                        <img src={sair} alt="exit_door" />
                        <span>Sair</span>
                </div>
            </div>
        </div>
        </>
    );  
}