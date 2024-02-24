import "../../assets/css/searchManga.css";
import search from "../../assets/images/deafault/search.svg";
import { useState, useEffect } from "react";
import api from "../../api";
import CardAnime from "../../components/Carrosel/CardAnime";
import ModalLogin from "../../components/Modais/ModalLogin";
import ModalRegister from "../../components/Modais/ModalRegister";

export default function SearchManga() {
  const [getMangas, setMangas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [infoPage, setInfoPage] = useState();
  const [genero, setGenero] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const nextPag = () => {
    if (infoPage) {
      setPagina(pagina + 1);
    }
  };

  const previuosPag = () => {
    if (pagina != 1) {
      setPagina(pagina - 1);
    }
  };

  const newGenero = (newGenero) => {
    setGenero(newGenero);
    setPagina(1);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      searchByName(searchValue);
    }
  };

  const searchByName = (name) => {
    setPagina(1);
    api
      .get(
        `/mangas/cards/search?tituloBusca=${name}&page=${pagina}&qtdPaginas=50`
      )
      .then((response) => {
        setMangas(response.data.media);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    api
      .get(`/mangas/cards/genero?genero=${genero}&page=${pagina}&qtdPaginas=50`)
      .then((response) => {
        console.log(response);
        setMangas(response.data.media);
        setInfoPage(response.data.pageInfo.hasNextPage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pagina, genero]);

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const loginModal = () => {
    setModal(!modal);
  };
  const registerModal = () => {
    setModal2(!modal2);
  };
  const swap = () => {
    setModal(!modal);
    setModal2(!modal2);
  };

  return (
    <>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} />
      <ModalRegister modal={modal2} onClose={registerModal} onSwap={swap} />
      <div className="search-anime-header">
        <div className="input-search-anime">
          <div
            className="search-button-anime"
            onClick={() =>
              searchByName(document.getElementById("input-anime").value)
            }
          >
            <img src={search} alt="" id="input-anime-img" />
          </div>
          <input
            type="text"
            name=""
            placeholder="Pesquisar"
            id="input-anime"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleEnterKeyPress}
          />
        </div>
        <div className="header-info">
          <span>Todos os mangas</span>
          <select
            name=""
            id="select-genre"
            onChange={(e) => newGenero(e.target.value)}
          >
            <option value="">Genêro</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="ecchi">Ecchi</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="mahou shoujo">Mahou Shoujo</option>
            <option value="mecha">Mecha</option>
            <option value="music">Music</option>
            <option value="mystery">Mystery</option>
            <option value="psychological">Psychological</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="slice of life">Slice of Life</option>
            <option value="sports">Sports</option>
            <option value="supernatural">Supernatural</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
        <div className="line-separation"></div>
      </div>
      <div className="anime-search-btns">
        <button onClick={previuosPag} className="btn-secundary">
          anterior
        </button>
        <button onClick={nextPag} className="btn-secundary">
          proxima
        </button>
      </div>
      <div className="anime-area-searched">
        {getMangas.map((item) => (
          <div className="card-anime-search-area" key={item.id}>
            <CardAnime
              id={item.id}
              title={item.title.romaji}
              image={item.coverImage.large}
              tipoIntegracao="mangas"
              loginModal={loginModal}
            />
          </div>
        ))}
      </div>
      <div className="anime-search-btns">
        <button onClick={previuosPag} className="btn-secundary">
          anterior
        </button>
        <button onClick={nextPag} className="btn-secundary">
          proxima
        </button>
      </div>
    </>
  );
}
