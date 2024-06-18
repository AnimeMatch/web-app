import React, { useState } from "react";
import apiUser from "../../apiUser";
import Qrcode from "qrcode";

const ModalUpdate = ({ modal, onClose, onSwap }) => {

  const [qrcode, setQrcode] = useState();

  const atualizar = (e) => {
    e.preventDefault();
    apiUser
      .put(
        "/users/addA2f?email=" + sessionStorage.email
      )
      .then((response) => {
        // setQrcode(response.data);
        Qrcode.toDataURL(response.data, (err, imageUrl) => {
          if (err) {
              console.error("Error generating QR code:", err);
          }
          setQrcode(imageUrl);
      });
        // onClose();
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
                <h1>Gerenciar Conta</h1>
                <div className="update-header-modal">
                  <span className="">Ativar autentificação de dois fatores ?</span>
                </div>
                  <div className="gambiarra2">
                    <button className="btn-secundary" onClick={atualizar}>     
                      Ativar
                    </button>
                  </div>
                  <span>Escanei o codigo com o app de Auth google</span>
                    {qrcode && (
                    <div>
                      <img src={qrcode} alt="" />
                    </div>
                    )}
                    <span></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUpdate;
