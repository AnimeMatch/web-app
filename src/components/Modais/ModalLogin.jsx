import React, { useState, useEffect } from 'react';
import apiUser from '../../apiUser';
import { toast } from 'react-toastify';
import facebookLogo from '../../assets/images/logos/facebook 1.svg';
import googleLogo from '../../assets/images/logos/search 1.svg';
import twitterLogo from '../../assets/images/logos/twitter 1.svg';
import logica from '../../utils/loginLogic';
import Swal from 'sweetalert2';

const ModalLogin = ({ modal, onClose, onSwap }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasA2f, setHasA2f] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName]= useState('');
  const [id, setId]= useState('');
  const [token, setToken]= useState('');

  const errorMessagesHandle = (res) => {
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

  const logar = async (e) => {
    e.preventDefault();
    const res = logica(email, password);
    if (res) {
      errorMessagesHandle(res);
      return;
    }

    try {
      const response = await apiUser.post('/users/login', {
        email,
        password,
      });

      if (response.status === 206) {
        setHasA2f(true); 
        setName(response.data.name)
        setId(response.data.userId)
        setToken(response.data.token)
      } else if (response.status === 200 && response.data?.token) {
        sessionStorage.setItem("authToken", response.data.token);
        sessionStorage.setItem("usuario", response.data.name);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("id", response.data.userId);
        console.log(response);
        onClose();
      } else {
        throw new Error('Ops! Ocorreu um erro interno.');
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
      console.log('Falha no login');
      errorMessagesHandle(error.response);
    }
  };

  const autenticar = (e) => {
    e.preventDefault();
   
    apiUser
      .post(`/users/validate-secret-key?email=${email}&code=${code}`)
      .then((response)=>{
        if(response.data){
          sessionStorage.setItem("authToken", token);
          sessionStorage.setItem("usuario", name);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("id", id);
          setHasA2f(false);
          onClose();
        }else {
          Swal.fire({
            title: `Token invalido!`,
            showCancelButton: false,
            width: "24em",
            color: "#fff",
            background: "#4641D9",
            confirmButtonColor: "#FFA800",
          })
        }
      })
  };

  
  useEffect(() => {
    console.log('hasA2f:', hasA2f); 
  }, [hasA2f]);

  return (
    <>
      {modal && (
        <div className="modal-login">
          <div className="overlay-modal" onClick={onClose}></div>
            <div className="modal-content login">
              <div className="fundo">
                {!hasA2f ? (
                    <div className="modal-right-content">
                      <span className="close" onClick={onClose}>
                        <div className="x"></div>
                      </span>
                      <h1>Login</h1>
                      <form onSubmit={logar} className="form">
                        <div className="e-mail">
                          <label htmlFor="email">E-mail</label>
                          <input
                            type="text"
                            name=""
                            id="emailId"
                            placeholder="email@example.com"
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                ) : (
                  <div className="modal-right-content">
                       <span className="close" onClick={onClose}>
                        <div className="x"></div>
                      </span>
                      <h1>Autentificar</h1>
                      <form onSubmit={autenticar} className="form">
                        <div className="code">
                          <label htmlFor="code">Codigo</label>
                          <input
                            type="text"
                            name=""
                            id="code"
                            onChange={(e) => setCode(e.target.value)}
                          />
                          <span id="emailE" className="errorMessageText"></span>
                        </div>

                        <div className="gambiarra">
                          <button type="submit" className="btn-secundary">
                            Autentificar
                          </button>
                        </div>

                        <div className="separate"></div>
                      </form>
                  </div>
                )}
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default ModalLogin;
