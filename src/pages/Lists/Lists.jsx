import React from "react";
import InfoProfile from "../Profile/components/InfoProfile";
import "../../assets/css/lists.css";
import seta from "../../assets/images/deafault/seta-esquerda.svg";
import editIcon from "../../assets/images/deafault/botao-editar.svg";
import deletIcon from "../../assets/images/deafault/delete.svg";
import search from "../../assets/images/deafault/search.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiUser from "../../apiUser";
import CardMidiaList from "../../components/Carrosel/CardMidiaList";

export default function Lists() {
  const { id } = useParams();
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("animes");
  const [midias, setMidias] = useState([]);
  const [edit, setEdit] = useState(false);
  const [blur, setBlur] = useState("none");
  const [refresh, setRefresh] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiUser.get(
          `/midia-lista/midias-da-lista-id-associativo?listaId=${id}`
        );
        const response2 = await apiUser.get(
          `/lists/listas-usuario?email=${sessionStorage.email}`
        );

        setMidias(response.data);
        let lists = response2.data;
        lists.forEach((list) => {
          if (list.id == id) {
            setListName(list.name);
            if (list.type == 2) {
              setListType("mangas");
            }
          }
        });
      } catch {}
    };
    fetchData();
  }, [refresh]);

  const handleEdit = () => {
    setEdit(!edit);
    if (blur == "none") {
      setBlur("block");
    }
    if (blur == "block") {
      setBlur("none");
    }
  };

  const isRefreshd = () => {
    setRefresh(!refresh);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMidias = midias.filter((item) =>
    item.midiaId.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="espaçamento-obrigatorio"></div>
      <InfoProfile />
      <div className="return-to-profile-area">
        <Link to="/profile">
          <img src={seta} alt="" />
        </Link>
      </div>
      <div className="list-info-area">
        <div className="list-info-area-top">
          <span className="list-info-area-name-list">{listName}</span>
          <img
            src={editIcon}
            alt=""
            className="editIconList"
            onClick={handleEdit}
          />
          <img src={deletIcon} alt="" className="deleteIconList" />
        </div>
        <div className="list-info-area-bot">
          <span className="list-info-area-type-list">{listType}</span>
        </div>
      </div>
      <div className="list-description-area">
        <div className="list-description-area-title">Descrição:</div>
        <div className="list-description-area-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          libero, magnam debitis non tempore laborum deleniti et ex beatae nemo
          quos rem neque cum ratione veniam similique sequi voluptas facere?
        </div>
      </div>
      <div className="input-search-inside-list">
        <div
          className="list-search-button-anime"
          //   onClick={() =>
          //     searchByName(document.getElementById("input-anime").value)
          //   }
        >
          <img src={search} alt="" id="list-input-anime-img" />
        </div>
        <input
          type="text"
          name=""
          placeholder="Pesquisar"
          id="list-input-anime"
          value={searchTerm}
          onChange={handleSearchTermChange}
          // value={searchValue}
          // onChange={(e) => setSearchValue(e.target.value)}
          // onKeyDown={handleEnterKeyPress}
        />
      </div>
      <div className="list-anime-area-searched">
        {midias &&
          filteredMidias.map((item) => (
            <div className="card-anime-search-area" key={item.id}>
              <CardMidiaList
                id={item.midiaId.idApi}
                title={item.midiaId.nome}
                image={item.midiaId.imagem}
                integracao={listType}
                edit={blur}
                listId={id}
                itemId={item.midiaId.id}
                associativo={item.midiaListaId}
                refresh={isRefreshd}
              />
            </div>
          ))}
      </div>
    </>
  );
}
