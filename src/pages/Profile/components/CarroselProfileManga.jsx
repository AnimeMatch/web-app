import "../../../assets/css/carroselProfile.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardListCustomizad from "./CardListCustomized";
import { useEffect, useState } from "react";
import apiUser from "../../../apiUser";

export default function CarroselProfileManga() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    apiUser
      .get(`/lists/listas-usuario?email=${sessionStorage.email}`)
      .then((response) => {
        let mangasLists = [];
        let lists = response.data;
        lists.forEach((list) => {
          if (list.type == 2) {
            mangasLists.push(list);
          }
        });
        setLists(mangasLists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const styleModal = {
    width: "17.5rem",
  };

  return (
    <>
      <div className="carrosel-container">
        <div className="bg">
          <div className="title-add">
            <span> Listas de mangá do usuario </span>
            <div className="add-list"></div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            speed={1000}
            slidesPerGroup={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiperProfile"
          >
            {lists.map((item) => (
              <SwiperSlide key={item.id} style={styleModal}>
                <CardListCustomizad
                  listName={item.name}
                  id={item.id}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
