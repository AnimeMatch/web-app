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

export default function CarroselDefault(props) {
  const [getList, setList] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    api
      .get(
        `/${props.tipoIntegracao}/cards/${props.uri}page=${props.pagina}&qtdPaginas=15`
      )
      .then((response) => {
        console.log(response.data.media)
        setList(response.data.media);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
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
          <SwiperSlide key={item.id}>
            <CardAnime
              id={item.id}
              title={item.title.romaji}
              image={item.coverImage.large}
              tipoIntegracao={props.tipoIntegracao}
              loginModal={props.loginModal}
              handleMidia={props.handleMidia}
              type={props.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
