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

export default function AnimeInfoPage() {
  const [animeData, setAnimeData] = useState({
    characters: { nodes: [] },
    coverImage: { large: "" },
    title: { native: "" },
    description: "",
    startDate: { year: "" },
  });

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
  console.log(animeData.characters);
  return (
    <>
      <div className="animeOverview">
        <div className="imageAddToList">
          <img src={animeData.coverImage.large} alt="" />
          <div className="addToList">
            <div>
              <button className="btn-secundary add"> Adicionar </button>
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
            <span className="titleAnime">{animeData.title.romaji}</span>
            <span className="releaseYear">{animeData.startDate.year}</span>
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
              slidesPerView={5}
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
    </>
  );
}
