import React, { useState } from "react";
import apiUser from "../../apiUser";
import { toast } from "react-toastify";
import facebookLogo from "../../assets/images/logos/facebook 1.svg";
import googleLogo from "../../assets/images/logos/search 1.svg";
import twitterLogo from "../../assets/images/logos/twitter 1.svg";

const ModalLogin = ({ modal, onClose, onSwap }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const logar = (e) => {
    e.preventDefault();

    apiUser
      .post(
        "/users/login",
        {
          email: email,
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
          sessionStorage.setItem("email", response.data.email);
          sessionStorage.setItem("id", response.data.userId);
          console.log(response);
          onClose();
          // toast.success('Login realizado com sucesso!');
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
      {modal && (
        <div className="modal-login">
          <div className="overlay-modal" onClick={onClose}></div>
          <div className="modal-content login">
            <div className="fundo">
              <div className="modal-right-content">
                <span className="close" onClick={onClose}>
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      Login
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
                      <a id="registerBtn" onClick={onSwap}>
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
    </>
  );
};

export default ModalLogin;
