import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import heart from "../assets/images/deafault/Frame 60.svg";
import heartFull from "../assets/images/deafault/Frame 62.svg";
import "../assets/css/animeInfoPage.css";
import viewIcon from "../assets/images/deafault/Olho.svg";
import likeIcon from "../assets/images/deafault/gostar(1) 1.svg";
import deslikeIcon from "../assets/images/deafault/desgostar(1) 1.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CardCharacter from "../components/CardCharacter";
import icone from "../assets/images/logos/logoNavbar.png";
import ModalAddToList from "../components/ModalAddToList";
import RatingStars from "../components/RatingStars";
import CarroselHome from "../components/CarroselHome";

export default function AnimeInfoPage() {
  const [animeData, setAnimeData] = useState({
    characters: { nodes: [] },
    coverImage: { large: "" },
    title: [],
    description: "",
    startDate: { year: "", month: "", day: "" },
    endDate: { year: "", month: "", day: "" },
    externalLinks: [],
    genres: [],
  });
  const [modalAdd, setModalAdd] = useState(false);
  const loginModalAdd = () => {
    console.log("cliquei ai");
    setModalAdd(!modalAdd);
  };
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    api
      .get(`/animes/anime?animeId=${id}`)
      .then((response) => {
        setAnimeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const favoriteAction = () => {
    setIsFavorite(!isFavorite);
    // Add save/remove from favorites logic here
  };
  console.log(animeData);
  return (
    <>
      <ModalAddToList
        show={modalAdd}
        loginModalAdd={loginModalAdd}
        animeTitle={animeData.title.romaji}
      />
      <div className="animeOverview">
        <div className="imageAddToList">
          <img src={animeData.coverImage.large} alt="" />
          <div className="addToList">
            <div>
              <button className="btn-secundary add" onClick={loginModalAdd}>
                {" "}
                Adicionar{" "}
              </button>
            </div>
            <img
              id="isFavorite"
              src={isFavorite ? heartFull : heart}
              alt=""
              onClick={favoriteAction}
            />
          </div>
        </div>
        <div className="textInfo">
          <div className="topInfo">
            <div className="titleDelimiter">
              <span className="titleAnime">{animeData.title.romaji}</span>
            </div>
            <span className="releaseYear">{animeData.startDate.year}</span>
            <RatingStars />
          </div>
          <span
            id="description"
            dangerouslySetInnerHTML={{ __html: animeData.description }}
          />
          <div className="usersOverview">
            <div className="viewers view">
              <img src={viewIcon} alt="" className="iconViewers" />
              <span>100K</span>
            </div>
            <div className="viewers like">
              <img src={likeIcon} alt="" className="iconViewers" />
              <span>100K</span>
            </div>
            <div className="viewers deslike">
              <img src={deslikeIcon} alt="" className="iconViewers" />
              <span>100K</span>
            </div>
          </div>
          <div className="charactersList">
            <div className="Title">
              <span className="characterTitle">Personagens</span>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={15}
              slidesPerView={8}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="swiperHome"
            >
              {animeData.characters.nodes.map((item, index) => (
                <SwiperSlide key={index}>
                  <CardCharacter
                    image={item.image.large}
                    title={item.name.full}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="secondLayerInfo">
        <div className="sideBar">
          <span>Onde encontrar?</span>
          <div className="externalLinksArea">
            {animeData.externalLinks.map((item, index) => (
              <div className="externalLink" key={index}>
                {item.icon ? (
                  <img src={item.icon} className="externalIcon" alt="icon" />
                ) : (
                  <img src={icone} className="externalIcon" alt="icon" />
                )}
                <a href={item.url} target="blank">
                  {item.site}
                </a>
              </div>
            ))}
          </div>
          <div className="infoSideBar">
            <div className="infoBlock">
              <span className="infoTitle">Formato:</span>
              <span className="infoText">{animeData.format}</span>
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Episódios:</span>
              <span className="infoText">{animeData.episodes}</span>
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Data de Lançamento:</span>
              <span className="infoText">
                {animeData.startDate.day}/{animeData.startDate.month}/
                {animeData.startDate.year}
              </span>
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Data de Finalização:</span>
              <span className="infoText">
                {animeData.endDate.day}/{animeData.endDate.month}/
                {animeData.endDate.year}
              </span>
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Generos:</span>
              {animeData.genres.map((item) => (
                <span className="infoText">{item}</span>
              ))}
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Titulo em romaji:</span>
              <span className="infoText">{animeData.title.romaji}</span>
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Titulo em inglês:</span>
              <span className="infoText">{animeData.title.english}</span>
            </div>
            <div className="infoBlock">
              <span className="infoTitle">Titulo em japones:</span>
              <span className="infoText">{animeData.title.native}</span>
            </div>
          </div>
        </div>
        <div className="commentSection">
          <div className="commentTitleSection">
            <span className="commentTitle">Comentarios</span>
            <button className="btn-secundary">Comentar</button>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <CarroselHome pagina="4" listTitle="Relacionados" />
      <CarroselHome pagina="4" listTitle="Recomendações" />
    </>
  );
}
