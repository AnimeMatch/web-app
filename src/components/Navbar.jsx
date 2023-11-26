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

  const loginModal = () => {
    setModal(!modal);
  };

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
      </nav>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap}/>
      <ModalRegister modal={modal2} onClose={regsiterModal} onSwap={swap}/>
    </>
  );
}
