import React, { useEffect } from "react";
import { useState } from "react";
import CarroselDefault from "../../components/Carrosel/CarroselDefault";
import ModalLogin from "../../components/Modais/ModalLogin";
import ModalRegister from "../../components/Modais/ModalRegister";
import Banner from "./components/Banner";
import BannerForum from "./components/BannerForum";
import GenderHome from "./components/GenderHome";
import ModalAddToList from "../Info/components/ModalAddToList";
import apiUser from "../../apiUser";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
    coverImage: "",
    criacao: "",
    genero: "",
    bio: "",
  });

  const handleLoad = () => {
    setReload(!reload);
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

  const [modalAdd, setModalAdd] = useState(false);
  const [midiaId, setMidiaId] = useState();
  const [midiaType, setMidiaType] = useState();
  const [midiaTitle, setMidiaTitle] = useState();
  const handleMidia = (midiaId, midiaTitle, midiaType) => {
    setMidiaId(midiaId);
    setMidiaTitle(midiaTitle);
    setMidiaType(midiaType);
    loginModalAdd();
    handleLoad();
  };

  const loginModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      apiUser
        .get(`/users/user?email=${sessionStorage.email}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      // handleLoad();
  }, [reload]);

  return (
    <>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} />
      <ModalRegister modal={modal2} onClose={registerModal} onSwap={swap} />
      <ModalAddToList
        show={modalAdd}
        loginModalAdd={loginModalAdd}
        title={midiaTitle}
        id={midiaId}
        type={midiaType}
      />
      {sessionStorage.getItem("authToken") ? (
        <Banner
          h1={"Bem vindo " + user.name + " !!"}
          span="Agora você já pode montar suas listas customizadas e deixar registrado sua forma de ver o mundo."
          btn="Bora lá"
          show={true}
        />
      ) : (
        <Banner
          h1="O melhor lugar para organizar os seus animes e mangas"
          span="Explore e ilumine o seu caminho de diversão com uma variedade imensa de animes e mangas"
          btn="Cadastre-se"
          show={false}
          registerModal={registerModal}
        />
      )}

      <CarroselDefault
        pagina="1"
        listTitle="Animes da temporada"
        uri="temporada?"
        tipoIntegracao="animes"
        loginModal={loginModal}
        handleMidia={handleMidia}
        type={1}
      />

      <GenderHome />

      <CarroselDefault
        pagina="1"
        listTitle="Animes atualizados recentemente"
        uri="em-trend?"
        tipoIntegracao="animes"
        loginModal={loginModal}
        handleMidia={handleMidia}
        type={1}
      />

      <BannerForum />

      <CarroselDefault
        pagina="1"
        listTitle="Mangas atualizados recentemente"
        uri="em-trend?"
        tipoIntegracao="mangas"
        loginModal={loginModal}
        handleMidia={handleMidia}
        type={2}
      />

      <CarroselDefault
        pagina="2"
        listTitle="Mangas mais lidos essa semana"
        uri="em-trend?"
        tipoIntegracao="mangas"
        loginModal={loginModal}
        handleMidia={handleMidia}
        type={2}
      />
    </>
  );
}
