import React from "react";
import facebookLogo from "../assets/images/logos/facebook 1.svg";
import googleLogo from "../assets/images/logos/search 1.svg";
import twitterLogo from "../assets/images/logos/twitter 1.svg";

const ModalRegister = ({ modal, onClose, onSwap }) => {
  return (
    <>
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
                      name=""
                      id="registerEmail"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="e-mail">
                    <label htmlFor="password">Nome de usuario</label>
                    <input
                      type="text"
                      name=""
                      id="registerUserName"
                      placeholder="Batatinha123"
                    />
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      name=""
                      id="registerPassword"
                      placeholder="&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;"
                    />
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Confirme sua Senha</label>
                    <input
                      type="password"
                      name=""
                      id="registerPasswordConfirm"
                      placeholder="&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;"
                    />

                    <div className="underLabel">
                      <div className="remember">
                        <input type="checkbox" name="" id="registerTerms" />
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
