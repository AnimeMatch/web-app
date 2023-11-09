import mockApi from "../mockApi";
import api from "../api";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/carroselHome.css";

export default function CarroselHome(props) {
  const [getList, setList] = useState([]);
  const [cardPerView,setCardPerView] = useState(7)

  useEffect(() =>{
    function handleResize(){
      if(window.innerWidth < 1200){
        setCardPerView(5)
      }
      if(window.innerWidth < 800){
        setCardPerView(3)
      }
      if(window.innerWidth > 1200){
        setCardPerView(7)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () =>{
      window.removeEventListener("resize",handleResize)
    }
  },[])

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
      <span>
        {props.listTitle}
      </span>
    </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={cardPerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiperHome"
      >
        {getList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cardContent">
                <div className="cardImage">
                  <img src={item.coverImage.large} alt="" />
                </div>
                <div className="cardTitle">
                  <span>{item.title.romaji}</span>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
