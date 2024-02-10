import React from "react";
import apiUser from "../../apiUser";
import { toast } from "react-toastify";
import facebookLogo from "../../assets/images/logos/facebook 1.svg";
import googleLogo from "../../assets/images/logos/search 1.svg";
import twitterLogo from "../../assets/images/logos/twitter 1.svg";
import logica from "../../utils/loginLogic";

class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  errorMessagesHandle = (res) => {
    var elements = document.getElementsByClassName("errorMessageText");
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = "";
    }
    if (res != 401) {
      document.getElementById(res[0]).textContent = res[1];
      document.getElementById(res[0]).style.color = "red";
      document.getElementById(res[0]).style.fontWeight = 800;
    }

    if (res == 401) {
      document.getElementById("emailE").textContent =
        "email ou senha incorretos";
      document.getElementById("emailE").style.color = "red";
      document.getElementById("emailE").style.fontWeight = 800;
    }
  };

  logar = (e) => {
    const email = document.getElementById("emailId").value;
    const password = document.getElementById("passwordId").value;
    e.preventDefault();
    let res = logica(email, password);
    if (res) {
      this.errorMessagesHandle(res);
    }
    if (!res) {
      apiUser
        .post(
          "/users/login",
          {
            email: this.state.email,
            password: this.state.password,
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
            this.props.onClose();
            // toast.success('Login realizado com sucesso!');
          } else {
            throw new Error("Ops! Ocorreu um erro interno.");
          }
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error.message);
          console.log("Falha no login");
          this.errorMessagesHandle(error.response.status);
        });
    }
  };

  render() {
    const { modal, onClose, onSwap } = this.props;
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
                  <form onSubmit={this.logar} className="form">
                    <div className="e-mail">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="text"
                        name=""
                        id="emailId"
                        placeholder="email@example.com"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                      <span id="emailE" className="errorMessageText"></span>
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
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      <span id="pswdE" className="errorMessageText"></span>
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
                      <button type="submit" className="btn-secundary">
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
  }
}

export default ModalLogin;
