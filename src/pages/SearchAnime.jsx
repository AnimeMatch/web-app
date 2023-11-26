import "../assets/css/searchAnime.css";
import search from "../assets/images/deafault/search.svg";

export default function SearchAnime() {
  return (
    <>
      <div className="search-anime-header">
        <div className="input-search-anime">
          <div className="search-button-anime">
            <img src={search} alt="" id="input-anime-img" />
          </div>
          <input type="text" name="" placeholder="Pesquisar" id="input-anime" />
        </div>
        <div className="header-info">
          <span>Todos os animes</span>
          <select name="" id="select-genre">
            <option value="">Genêro</option>
            <option value="">Action</option>
            <option value="">Adventure</option>
            <option value="">Comedy</option>
            <option value="">Drama</option>
            <option value="">Ecchi</option>
            <option value="">Fantasy</option>
            <option value="">Horror</option>
            <option value="">Mahou Shoujo</option>
            <option value="">Mecha</option>
            <option value="">Music</option>
            <option value="">Mystery</option>
            <option value="">Psychological</option>
            <option value="">Romance</option>
            <option value="">Sci-Fi</option>
            <option value="">Slice of Life</option>
            <option value="">Sports</option>
            <option value="">Supernatural</option>
            <option value="">Thriller</option>
          </select>
        </div>
        <div className="line-separation"></div>
      </div>
    </>
  );
}
