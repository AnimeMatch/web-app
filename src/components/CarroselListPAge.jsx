// import mockApi from "../mockApi";
import apiUser from "../apiUser";
import CardAnime from "./CardAnime2";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/carroselHome.css";

export default function CarroselHome(props) {
  const [getList, setList] = useState([]);

  useEffect(() => {
    apiUser
      .get(`/anime-lista/animes-da-lista?listaId=${props.id}`)
      .then((response) => {
        console.log(response.data)
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <div className="listTitle">
        <span className="title">Essa é a lista: {props.id}</span>
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
              id = {item.idApi}
              title={item.title}
              image={item.imagem}
              idList={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
