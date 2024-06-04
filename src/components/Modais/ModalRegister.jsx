import React, { useState } from "react";
import facebookLogo from "../../assets/images/logos/facebook 1.svg";
import googleLogo from "../../assets/images/logos/search 1.svg";
import twitterLogo from "../../assets/images/logos/twitter 1.svg";
import apiUser from "../../apiUser";
import logica from "../../utils/registerLogic";
import TermsAndConditions from "../TermsAndConditions";

const ModalRegister = ({ modal, onClose, onSwap }) => {
  const [modalTerm, setModalTerm] = useState(false);

  const errorMessagesHandle = (res) => {
    var elements = document.getElementsByClassName("errorMessageText");
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = "";
    }
    if (res != 1 && res != 409) {
      document.getElementById(res[0]).textContent = res[1];
      document.getElementById(res[0]).style.color = "red";
      document.getElementById(res[0]).style.fontWeight = 800;
      document.getElementById("termE").style.color = "white";
      document.getElementById("termE").style.fontWeight = 400;
    }

    if (res == 1) {
      document.getElementById("termE").style.color = "red";
      document.getElementById("termE").style.fontWeight = 800;
    }

    if (res == 409) {
      document.getElementById("emailE").textContent = "Email já cadastrado.";
      document.getElementById("emailE").style.color = "red";
      document.getElementById("emailE").style.fontWeight = 800;
    }
  };

  const cadastrar = (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const name = document.getElementById("registerUserName").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerPasswordConfirm").value;
    const terms = document.getElementById("registerTerms").checked;

    let res = logica(email, password, confirmPassword, name, terms);
    if (res) {
      errorMessagesHandle(res);
    }
    if (!res) {
      apiUser
        .post(
          "/users/",
          {
            email: email,
            password: password,
            name: name,
            profileImage:
              "https://s4.anilist.co/file/anilistcdn/character/large/b62-Wixe3kLJGVby.png",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            onSwap();
          } else {
            throw new Error("Ops! Ocorreu um erro interno.");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            errorMessagesHandle(error.response.status);
          }
        });
    }
  };

  const termsModal = () => {
    setModalTerm(!modalTerm);
  };

  return (
    <>
      <TermsAndConditions modal={modalTerm} onClose={termsModal} />
      {modal && (
        <div className="modal-register">
          <div className="overlay-modal" onClick={onClose}></div>
          <div className="modal-content login">
            <div className="fundo2">
              <div className="modal-right-content">
                <span className="close" onClick={onClose}>
                  <div className="x"></div>
                </span>
                <h1>Cadastro</h1>
                <form action="" method="post" className="form2">
                  <div className="e-mail">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="registerEmail"
                      placeholder="email@example.com"
                    />
                    <span id="emailE" className="errorMessageText"></span>
                  </div>
                  <div className="e-mail">
                    <label htmlFor="password">Nome de usuario</label>
                    <input
                      type="text"
                      id="registerUserName"
                      placeholder="Batatinha123"
                    />
                    <span id="userE" className="errorMessageText"></span>
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      id="registerPassword"
                      placeholder="**********"
                    />
                    <span id="pswdE" className="errorMessageText"></span>
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Confirme sua Senha</label>
                    <input
                      type="password"
                      id="registerPasswordConfirm"
                      placeholder="**********"
                    />
                    <span id="pswdE2" className="errorMessageText"></span>
                    <div className="underLabel">
                      <div className="remember">
                        <input type="checkbox" id="registerTerms" />
                        <span className="tinyText" id="termE" onClick={termsModal}>
                          Sim, compreendo e concordo com os Termos de Serviços
                          e Política de Privacidade do Anime Match.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="gambiarra2">
                    <button className="btn-secundary" onClick={cadastrar}>
                      Cadastrar
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
                    <span id="botRegister" className="btr1">
                      Tem uma conta?{" "}
                      <a id="registerBtn" onClick={onSwap}>
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
};

export default ModalRegister;
