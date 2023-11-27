import "../assets/css/modalAddToList.css";
import x from "../assets/images/deafault/X.svg"

export default function ModalAddToList(props) {

  return (
    <>
      {props.show && (
        <div className="modalAddToList">
          <div className="overlay-modal" onClick={props.loginModalAdd}></div>
          <div className="modal-contentAdd">
            <div className="header-area">
            <span className="modal-title-overlay">Adicinar: <span className="modal-title-inside">{props.animeTitle}</span> a sua lista</span>
            <img className="close-button" src={x} alt=""onClick={props.loginModalAdd} />
            </div>
            <input type="text" placeholder="Pesquisar" className="modal-add-input" />
            <div className="listOfLists">
              <div className="list-of-lists">
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
                <div className="list">
                    nome da lista
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-primary" onClick={props.loginModalAdd}>Cancelar</button>
              <button className="btn-secundary">Adicionar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
