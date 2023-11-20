// import mockApi from "../mockApi";
import api from "../api";
import CardAnime from "./CardAnime";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/carroselHome.css";

export default function CarroselHome(props) {
  const [getList, setList] = useState([]);

  // const [setCardPerView] = useState(7);

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 1200) {
  //       setCardPerView(5);
  //     }
  //     if (window.innerWidth < 800) {
  //       setCardPerView(3);
  //     }
  //     if (window.innerWidth > 1200) {
  //       setCardPerView(6);
  //     }
  //   }
  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    api
      .get(`/animes/cards?page=${props.pagina}&qtdPaginas=15`)
      .then((response) => {
        console.log(response);
        setList(response.data.media);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="listTitle">
        <span className="title">{props.listTitle}</span>
        <span className="more">Mais</span>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5.4}
        speed={1000}
        slidesPerGroup={5}
        navigation        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiperHome"
      >
        {getList.map((item) => (
          <SwiperSlide key={item.id}>
            <CardAnime
              id = {item.id}
              title={item.title.romaji}
              image={item.coverImage.large}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
