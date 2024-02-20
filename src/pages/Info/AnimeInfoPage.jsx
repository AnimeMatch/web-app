import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import heart from "../../assets/images/deafault/Frame 60.svg";
import heartFull from "../../assets/images/deafault/Frame 62.svg";
import "../../assets/css/animeInfoPage.css";
import viewIcon from "../../assets/images/deafault/Olho.svg";
import likeIcon from "../../assets/images/deafault/gostar(1) 1.svg";
import deslikeIcon from "../../assets/images/deafault/desgostar(1) 1.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CardCharacter from "./components/CardCharacter";
import icone from "../../assets/images/logos/logoNavbar.png";
import ModalAddToList from "./components/ModalAddToList";
import CarroselDefault from "../../components/Carrosel/CarroselDefault";
import CommentArea from "./components/CommentArea";
import ModalLogin from "../../components/Modais/ModalLogin";
import apiUser from "../../apiUser";
import ModalRegister from "../../components/Modais/ModalRegister";

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
    view:"",
    like:"",
    deslike:""

  });

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [modalAdd, setModalAdd] = useState(false);
  const [uriGenero, setUriGenero] = useState(``);
  
  const handleGenreChange = useCallback(() => {
    if (animeData.genres.length > 0) {
    setUriGenero(`genero?genero=${animeData.genres[0]}&`);
    console.log(uriGenero);
    }
  }, [animeData, uriGenero]);

  useEffect(() => {
      handleGenreChange();
  }, [handleGenreChange]);

  const loginModalAdd = () => {
    if (!sessionStorage.authToken) {
      setModal(!modal);
    } else {
      setModalAdd(!modalAdd);
    }
  };
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function validateData() {
      try {
        const animeInfo = await api.get(`/animes/anime?animeId=${id}`);
        console.log(animeInfo.data)
        setAnimeData(animeInfo.data);
        let verified = await verifyIfAlreadyInTheFavorite();
        if (verified) {
          if (!verified.animeId) {
            setIsFavorite(false);
          } else {
            setIsFavorite(true);
          }
        }
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    }
    validateData();
  }, [id]);

  const verifyIfAlreadyInTheFavorite = () => {
    if (sessionStorage.authToken) {
      let thisAnime;
      let idAssociativo;
      async function verify() {
        const response1 = await apiUser.get(
          `/lists/favorito?email=${sessionStorage.email}`
        );
        const idLista = response1.data.id;

        const response2 = await apiUser.get(
          `/midia-lista/midias-da-lista-id-associativo?listaId=${idLista}`
        );
        console.log(response2.data);
        if (response2.data) {
          response2.data.forEach((data) => {
            if (data.animeId.idApi == id) {
              thisAnime = data.animeId.idApi;
              idAssociativo = data.animeListaId;
            }
          });
        }
        return {
          listId: idLista,
          animeId: thisAnime,
          id: idAssociativo,
        };
      }
      return verify();
    }
  };

  const favoriteAction = () => {
    if (!sessionStorage.authToken) {
      setModal(!modal);
    } else {
      async function fetchData() {
        try {
          let verified = await verifyIfAlreadyInTheFavorite();
          if (!verified.animeId) {
            apiUser
              .post(`/midia-lista/?idApi=${id}&idLista=${verified.listId}`)
              .then((response) => {
                console.log("Adicionado aos favoritos");
              })
              .catch((error) => {
                console.log(error);
              });
            setIsFavorite(true);
          } else {
            apiUser
              .delete(`/midia-lista/?midiaListaId=${verified.id}`)
              .then((response) => {
                console.log("Removido dos favoritos");
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
            setIsFavorite(false);
          }
        } catch (error) {
          console.error("Ocorreu um erro:", error);
        }
      }
      fetchData();
    }
  };

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
      <ModalAddToList
        show={modalAdd}
        loginModalAdd={loginModalAdd}
        animeTitle={animeData.title.romaji}
        animeId={id}
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
              <span className="infoTitle">Gêneros:</span>
              {animeData.genres.map((item, index) => (
                <span key={index} className="infoText">
                  {item}
                </span>
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
          <CommentArea />
        </div>
      </div>
      {animeData.genres.length > 0 && uriGenero && uriGenero.length > 0 && (
      <CarroselDefault
      pagina="2"
      listTitle="Relacionados"
      uri={uriGenero}
      tipoIntegracao="animes"
    />)}
      <CarroselDefault pagina="2" listTitle="Recomendações" uri="temporada?" tipoIntegracao="animes"/>
    </>
  );
}
