import "../assets/css/carroselProfile.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function CarroselProfile() {
  return (
    <>
      <div className="carrosel-container">
        <div className="bg">
          <div className="title-add">
            <span> Listas Customizadas </span>
            <div className="add-list"></div>
          </div>
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3.4}
            speed={1000}
            slidesPerGroup={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiperProfile"
          >
            <button></button>
            <SwiperSlide className="teste">Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper> */}
          <div className="">

          </div>
        </div>
      </div>
    </>
  );
}
