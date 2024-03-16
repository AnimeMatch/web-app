// import mockApi from "../mockApi";
import api from "../../api";
import CardAnime from "./CardAnime";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/carroselHome.css";
import "../../assets/css/responsive/carroselHomeTablet.css";
import apiUser from "../../apiUser";

export default function CarroselDefault(props) {
  const [getList, setList] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.profile) {
          if (props.uri) {
            const response = await apiUser.get(
              `/midia-lista/midias-da-lista?listaId=${props.uri}`
            );
            setList(response.data);
          }
        } else {
          const response = await api.get(
            `/${props.tipoIntegracao}/cards/${props.uri}page=${props.pagina}&qtdPaginas=15`
          );
          setList(response.data.media);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      console.log(`\n\nPassei do window\n\n`)
      if (screenWidth > 1024) {
        setSlidesPerView(5.2);
      } else if (screenWidth >= 768) {
        setSlidesPerView(4.4);
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", updateSlidesPerView);

    updateSlidesPerView();

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <>
      <div className="listTitle">
        <span className="title">{props.listTitle}</span>
        <span className="more">Mais</span>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidesPerView}
        speed={1000}
        slidesPerGroup={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiperHome"
      >
        {getList.map((item) => (
          <SwiperSlide key={item.idApi}>
            {props.profile ? (
              <CardAnime
                id={item.idApi}
                title={item.nome}
                image={item.imagem}
                tipoIntegracao={props.tipoIntegracao}
                loginModal={props.loginModal}
                handleMidia={props.handleMidia}
                type={props.type}
              />
            ) : (
              <CardAnime
                id={item.id}
                title={item.title.romaji}
                image={item.coverImage.large}
                tipoIntegracao={props.tipoIntegracao}
                loginModal={props.loginModal}
                handleMidia={props.handleMidia}
                type={props.type}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
