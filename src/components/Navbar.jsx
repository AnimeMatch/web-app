import "../assets/css/navbar.css";
import "../assets/css/responsive/navbarTablet.css";
import React, { useEffect } from "react";
import logo from "../assets/images/logos/logoNavbar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./Modais/ModalLogin.jsx";
import ModalRegister from "./Modais/ModalRegister.jsx";
import ModalUpdate from "./Modais/ModalUpdate.jsx";
import apiUser from "../apiUser.js";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
    coverImage: "",
    criacao: "",
    genero: "",
    bio: "",
  });
  const [reload, setReload] = useState(true);

  const handleLoad = () => {
    setReload(!reload);
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    // document.body.style.overflow =  "scroll" ;
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    handleLoad();
    toggleMenu();
  };

  const loginModal = () => {
    setModal(!modal);
  };

  const menuStyle = {
    opacity: isMenuOpen ? "1" : "0",
    transform: isMenuOpen ? "translateY(10%)" : "translateY(-10%)",
    transition: "transform 0.5s ease-out",
    top: "8%",
    left: "81%",
    height: isMenuOpen ? "auto" : "0",
  };

  const fontStyle = {
    display: isMenuOpen ? "flex" : "none",
  };

  const registerModal = () => {
    setModal2(!modal2);
  };

  const updateModal = () => {
    setModal3(!modal3);
  };

  const swap = () => {
    setModal(!modal);
    setModal2(!modal2);
  };

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      apiUser
        .get(`/users/user?email=${sessionStorage.email}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [reload]);

  const renderAuthenticatedContent = () => {
    return (
      <>
        <div className="margin">
          <div className="user-menu" onClick={toggleMenu}>
            <span className="user-menu-name">{user.name}</span>
            <div className="perfil-image">
              <img src={user.profileImage} alt="" id="" />
            </div>
          </div>
        </div>

        <div className="menu-option" style={menuStyle}>
          <ol>
            <li style={fontStyle} onClick={toggleMenu}>
              <Link to="profile" className="inside-toggle-menu">
                <div className="icon-profile"></div>
                <span>Perfil</span>
              </Link>
            </li>
            <li style={fontStyle} onClick={updateModal}>
              <div className="icon-settings"></div>
              <span>Gerenciar conta</span>
            </li>
            <li style={fontStyle}>
              <Link
                to="/"
                onClick={handleLogout}
                className="inside-toggle-menu"
              >
                <div className="icon-exit"></div>
                <span>Sair</span>
              </Link>
            </li>
          </ol>
        </div>
      </>
    );
  };

  const renderUnauthenticatedContent = () => {
    return (
      <>
        <button className="btn-primary" onClick={loginModal} id="btn-login">
          <span id="login"> Login</span>
        </button>
        <button className="btn-secundary" onClick={registerModal}>
          <span>Cadastro</span>
        </button>
      </>
    );
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div className="brandingArea">
            <img src={logo} alt="" />
            <span id="title">Anime Match</span>
          </div>
        </Link>
        <div className="navigationItens">
          <ol className="navList">
            <li>
              <Link to={"search/anime/"} className="link">
                Anime
              </Link>
            </li>
            <li>
              <Link to={"search/manga/"} className="link">
                Manga
              </Link>
            </li>
            <li>
              <Link to={"forum/"} className="link">
                Fórum
              </Link>
            </li>
          </ol>
        </div>
        <div className="userArea">
          {sessionStorage.getItem("authToken")
            ? renderAuthenticatedContent()
            : renderUnauthenticatedContent()}
        </div>
      </nav>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} handleLoad={handleLoad}/>
      <ModalRegister modal={modal2} onClose={registerModal} onSwap={swap} />
      <ModalUpdate modal={modal3} onClose={updateModal} />
    </>
  );
}
