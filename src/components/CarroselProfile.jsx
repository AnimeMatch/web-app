import "../assets/css/carroselProfile.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardListCustomizad from "../components/CardListCustomized";

export default function CarroselProfile() {

const styleModal = {
  width: "17.5rem",
}

  return (
    <>
      <div className="carrosel-container">
        <div className="bg">
          <div className="title-add">
            <span> Listas Customizadas </span>
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
            {/* <button></button> */}
            <SwiperSlide  style={styleModal}><CardListCustomizad/></SwiperSlide>
            <SwiperSlide  style={styleModal}><CardListCustomizad/></SwiperSlide>
            <SwiperSlide  style={styleModal}><CardListCustomizad/></SwiperSlide>
            <SwiperSlide  style={styleModal}><CardListCustomizad/></SwiperSlide>

          </Swiper>
          <div className="">

          </div>
        </div>
      </div>
    </>
  );
}
