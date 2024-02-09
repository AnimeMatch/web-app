import React, { useState } from "react";
import apiUser from "../../apiUser";

const ModalUpdate = ({ modal, onClose, onSwap }) => {
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const atualizar = (e) => {
    e.preventDefault();
    apiUser
      .put(
        "/users/",
        {
          password: password,
          name: name,
          id: sessionStorage.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        onClose();
      })
      .catch((error) => {
        console.log(error.message);
        console.log("Falha no login");
      });
  };

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
                <h1>Atualizar</h1>
                <div className="update-header-modal">
                  <span className="">Nenhum dos itens é obrigatorio.</span>
                </div>
                <form action="" method="post" className="form2">
                  <div className="e-mail">
                    <label htmlFor="password">Nome de usuario</label>
                    <input
                      type="text"
                      name=""
                      id="registerUserName"
                      placeholder="Batatinha123"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="senha">
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      name=""
                      id="registerPassword"
                      placeholder="&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;&#10625;"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="gambiarra2">
                    <button className="btn-secundary" onClick={atualizar}>
                      {" "}
                      Atualizar{" "}
                    </button>
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

export default ModalUpdate;
