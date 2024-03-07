import "../../assets/css/modalAlteracao.css"
import "../../assets/css/editInfoProfile.css";
import atentionImage from "../../assets/images/deafault/attention.svg"
import { useState } from "react";

export default function ModalAlteracaoPendente(props){
    return (
      <>
      <div className="atention-modal-overlay">
        <div className="atention-painel-principal">
              <div className="atention-image-area">
                  <div className="atention-image"
                  style={{background: (`url("${atentionImage}")`), 
                  backgroundSize: "couver"}}>
                  </div>
              </div>
              <div className="text-content">
                  <span className="title-atention">Alterações pendentes!</span>
                  <span className="simple-text-atention">Você fez alterações nessa página e não salvou</span>
                  <span className="simple-text-atention">deseja realmente sair sem salvar?</span>
              </div>
              <div className="buttons-area">
                  <button 
                      className="cancel-button edit-button"
                      onClick={props.closeModalAlteracao}>
                          cancelar
                  </button>
                  <button className="save-button edit-button"
                      onClick={props.fecharEdicao}>
                          sair
                  </button>
              </div>
          </div>
      </div>
      </>
    );
}