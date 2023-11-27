import "../assets/css/navbar.css";
import api from "../api.js";
import logo from "../assets/images/logos/logoNavbar.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin.jsx";
import ModalRegister from "./ModalRegister.jsx";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  //   document.body.style.overflow = isMenuOpen ? "scroll" : "hidden";
  // };

  const loginModal = () => {
    setModal(!modal);
  };

  // const menuStyle = {
  //   opacity: isMenuOpen ? "1" : "0",
  //   transform: isMenuOpen ? "translateY(10%)" : "translateY(-10%)",
  //   transition: "transform 0.5s ease-out",
  //   top: "8%",
  //   left: "81%",
  //   height: isMenuOpen ? "auto" : "0",
  // };

  // const fontStyle = {
  //   display: isMenuOpen ? "flex" : "none",
  // };

  const regsiterModal = () => {
    setModal2(!modal2);
  };

  const swap = () => {
    setModal(!modal);
    setModal2(!modal2);
  };
  const navigate = useNavigate();

  const logar = (e) => {
    e.preventDefault();

    api
      .post(
        "/users/login",
        {
          email: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem("authToken", response.data.token);
          sessionStorage.setItem("usuario", response.data.name);

          // toast.success('Login realizado com sucesso!');
          navigate("/LogoutPage");
        } else {
          throw new Error("Ops! Ocorreu um erro interno.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        console.log("Falha no login");
      });
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
            {/* <li className="alterar">
              <a className="link" href="#">
                Lista
              </a>
            </li> */}
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
          <button className="btn-primary" onClick={loginModal} id="btn-login">
            <span id="login"> Login</span>
          </button>
          <button className="btn-secundary" onClick={regsiterModal}>
            <span>Cadastro</span>
          </button>
        </div>

        {/* <div className="margin">
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
              <span>Sair</span>
            </li>
          </ol>
        </div> */}
      </nav>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} />
      <ModalRegister modal={modal2} onClose={regsiterModal} onSwap={swap} />
    </>
  );
}
