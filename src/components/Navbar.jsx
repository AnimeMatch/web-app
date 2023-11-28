import "../assets/css/navbar.css";
import logo from "../assets/images/logos/logoNavbar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin.jsx";
import ModalRegister from "./ModalRegister.jsx";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "scroll" : "hidden";
  };

  const handleLogout = () => {};

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

  const swap = () => {
    setModal(!modal);
    setModal2(!modal2);
  };

  const renderAuthenticatedContent = () => {
    return (
      <>
        <div className="margin">
          <button className="menu-nav" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="menu-option" style={menuStyle}>
          <ol>
            <li style={fontStyle}>
              <div className="icon-profile"></div>
              <span>Perfil</span>
            </li>
            <li style={fontStyle}>
              <div className="icon-settings"></div>
              <span>Gerenciar conta</span>
            </li>
            <li style={fontStyle}>
              <div className="icon-exit"></div>
              <span onClick={handleLogout}>Sair</span>
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
        <Link>
          <div className="brandingArea">
            <img src={logo} alt="" />
            <span id="title">Anime Match</span>
          </div>
        </Link>
        <div className="navigationItens">
          <ol className="navList">
            <Link to={"search/anime/"}>
              <li>
                <a className="link" href="#">
                  Anime
                </a>
              </li>
            </Link>
            <li>
              <Link to={"search/manga/"}>
                <a className="link" href="#">
                  Manga
                </a>
              </Link>
            </li>
            {sessionStorage.authToken ? (
              <li className="alterar">
                <Link to={"lists/"}>
                  <a className="link" href="#">
                    Lista
                  </a>
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to={"forum/"}>
                <a className="link" href="#">
                  Fórum
                </a>
              </Link>
            </li>
          </ol>
        </div>
        <div className="userArea">
          {sessionStorage.authToken
            ? renderAuthenticatedContent()
            : renderUnauthenticatedContent()}
        </div>
      </nav>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} />
      <ModalRegister modal={modal2} onClose={registerModal} onSwap={swap} />
    </>
  );
}
