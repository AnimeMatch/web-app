import "../../../assets/css/modalAddToList.css";
import x from "../../../assets/images/deafault/X.svg";
import apiUser from "../../../apiUser";
import { useEffect, useState } from "react";

export default function ModalAddToList(props) {
  const [lists, setLists] = useState([]);
  const [selected, setSelected] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (sessionStorage.email) {
      apiUser
        .get(`/lists/listas-usuario?email=${sessionStorage.email}`)
        .then((response) => {
          setLists(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const selectedList = (id) => {
    setSelected(id);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLists = lists.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToList = () => {
    apiUser
      .post(`/anime-lista/?idApi=${props.animeId}&idLista=${selected}`)
      .then((response) => {
        console.log(response);
        props.loginModalAdd();
        if (response.status == 201) {
          alert("Adicionado a lista ");
          setSelected(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {props.show && (
        <div className="modalAddToList">
          <div className="overlay-modal" onClick={props.loginModalAdd}></div>
          <div className="modal-contentAdd">
            <div className="header-area">
              <span className="modal-title-overlay">
                Adicinar:{" "}
                <span className="modal-title-inside">{props.animeTitle}</span> a
                sua lista
              </span>
              <img
                className="close-button"
                src={x}
                alt=""
                onClick={props.loginModalAdd}
              />
            </div>
            <input
              type="text"
              placeholder="Pesquisar"
              className="modal-add-input"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <div className="listOfLists">
              <div className="list-of-lists">
                {filteredLists.map((item, index) => (
                  <div
                    key={item.id}
                    className={item.id === selected ? "list-select" : "list"}
                    id={item.id}
                    onClick={() => selectedList(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-primary" onClick={props.loginModalAdd}>
                Cancelar
              </button>
              <button className="btn-secundary" onClick={addToList}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
