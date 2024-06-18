import "../../../assets/css/carroselProfile.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardListCustomizad from "./CardListCustomized";
import { useEffect, useState } from "react";
import apiUser from "../../../apiUser";
import Swal from "sweetalert2";

export default function CarroselProfileManga() {
  const [lists, setLists] = useState([]);
  const [load, setLoad] = useState(false);

  const handleLoad = () => {
    setLoad(!load);
  };

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
  }, [load]);

  const newList = () => {
    Swal.fire({
      title: "Criar nova lista?",
      text: "Escreva o nome da nova lista!",
      input: "text",
      showCancelButton: true,
      cancelButtonColor: "#D5D5D5",
      confirmButtonColor: "#FFA800",
      confirmButtonText: "Adicionar",
      cancelButtonText: "Cancelar",
      width: "24em",
      color: "#fff",
      background: "#4641D9",
    }).then((result) => {
      if (result.isConfirmed) {
        const text = result.value; // Obtém o valor do input

        // Verifica se o texto não está vazio
        if (text.trim() !== "") {
          apiUser
            .post(`lists/?aniUserId=${sessionStorage.id}&name=${text}&type=2`)
            .then((response) => {
              if (response.status == 201) {
                Swal.fire({
                  title: "Nova lista adicionada com sucesso!",
                  icon: "success",
                  width: "24em",
                  color: "#fff",
                  background: "#4641D9",
                  confirmButtonColor: "#FFA800",
                });
                handleLoad();
              }
            })
            .catch((error) => {
              console.error("Erro ao adicionar lista:", error);
            });
        } else {
          // Caso o usuário não tenha inserido nenhum texto
          Swal.fire({
            title: "Erro!",
            text: "Você precisa fornecer um nome para a lista.",
            icon: "error",
          });
        }
      }
    });
  };

  const styleModal = {
    width: "17.5rem",
  };

  return (
    <>
      <div className="carrosel-container">
        <div className="bg">
          <div className="title-add">
            <span> Listas de mangá do usuario </span>
            <div className="add-list" onClick={newList}></div>
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
