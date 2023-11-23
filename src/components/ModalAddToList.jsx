import "../assets/css/modalAddToList.css";

export default function ModalAddToList(props) {

  return (
    <>
      {props.show && (
        <div className="modalAddToList">
          <div className="overlay-modal" onClick={props.loginModalAdd}></div>
          <div className="modal-contentAdd">
            <span>Adicinar: {props.animeTitle} a sua lista</span>
            <input type="text" placeholder="Pesquisar" />
            <div className="listOfLists">
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
            <button className="btn-primary">Cancelar</button>
            <button className="btn-secundary">Adicionar</button>
          </div>
        </div>
      )}
    </>
  );
}
