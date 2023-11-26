import "../assets/css/navbar.css";
import api from "../api.js";
import logo from "../assets/images/logos/logoNavbar.png";
import facebookLogo from "../assets/images/logos/facebook 1.svg";
import googleLogo from "../assets/images/logos/search 1.svg";
import twitterLogo from "../assets/images/logos/twitter 1.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
            <li>
              <a className="link" href="#">
                Anime
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Manga
              </a>
            </li>
            {/* <li className="alterar">
              <a className="link" href="#">
                Lista
              </a>
            </li> */}
            <li>
              <a className="link" href="#">
                Fórum
              </a>
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

      {modal && (
        <div className="modal-login">
          <div className="overlay-modal" onClick={loginModal}></div>
          <div className="modal-content login">
            <div className="fundo">
              <div className="modal-right-content">
                <span className="close" onClick={loginModal}>
                  <div className="x"></div>
                </span>
                <h1>Login</h1>
                <form action="" method="post" className="form">
                  <div className="e-mail">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      name=""
                      id="emailId"
                      placeholder="email@example.com"
                      onChange={(e) => setUsername(e.target.value)}
                    />

                    <span className="tinyText">
                      <a href="" id="fEmail">
                        Esqueceu seu e-mail?
                      </a>
                    </span>
                  </div>

                  <div className="senha">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      name=""
                      id="passwordId"
                      placeholder="&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="underLabel">
                      <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <span className="tinyText">Lembrar de mim</span>
                      </div>
                      <span className="tinyText">
                        <a href="">Esqueceu sua senha?</a>
                      </span>
                    </div>
                  </div>

                  <div className="gambiarra">
                    <button className="btn-secundary" onClick={logar}>
                      {" "}
                      Login{" "}
                    </button>
                  </div>

                  <div className="separate"></div>

                  <div className="register">
                    <span id="topRegister">Ou se conectar com</span>
                    <div className="socialLogos">
                      <img src={googleLogo} id="google" alt="google" />
                      <img src={facebookLogo} id="facebook" alt="facebook" />
                      <img src={twitterLogo} id="twitter" alt="twitter" />
                    </div>
                    <span id="botRegister">
                      Não tem conta ?{" "}
                      <a id="registerBtn" onClick={swap}>
                        Cadastre-se
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal2 && (
        <div className="modal-register">
          <div className="overlay-modal" onClick={regsiterModal}></div>
          <div className="modal-content login">
            <div className="fundo2">
              <div className="modal-right-content">
                <span className="close" onClick={regsiterModal}>
                  <div className="x"></div>
                </span>
                <h1>Cadastro</h1>
                <form action="" method="post" className="form2">
                  <div className="e-mail">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="e-mail">
                    <label htmlFor="password">Nome de usuario</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Batatinha123"
                    />
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;"
                    />
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Confirme sua Senha</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;"
                    />

                    <div className="underLabel">
                      <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <span className="tinyText">
                          Sim, compreendo e concordo com os Termos de Serviços e
                          Política de Privacidade do Anime Match.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="gambiarra2">
                    <button className="btn-secundary"> Cadastrar </button>
                  </div>

                  <div className="separate"></div>
                  <div className="register">
                    <span id="topRegister">Ou se conectar com</span>
                    <div className="socialLogos">
                      <img src={googleLogo} id="google" alt="google" />
                      <img src={facebookLogo} id="facebook" alt="facebook" />
                      <img src={twitterLogo} id="twitter" alt="twitter" />
                    </div>
                    <span id="botRegister" className="btr1">
                      Tem uma conta ?{" "}
                      <a id="registerBtn" onClick={swap}>
                        Logar
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
