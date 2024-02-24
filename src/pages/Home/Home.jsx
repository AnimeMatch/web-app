import { useState } from "react";
import CarroselDefault from "../../components/Carrosel/CarroselDefault";
import ModalLogin from "../../components/Modais/ModalLogin";
import ModalRegister from "../../components/Modais/ModalRegister";
import Banner from "./components/Banner";
import BannerForum from "./components/BannerForum";
import GenderHome from "./components/GenderHome";

export default function Home() {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

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

  return (
    <>
      <ModalLogin modal={modal} onClose={loginModal} onSwap={swap} />
      <ModalRegister modal={modal2} onClose={registerModal} onSwap={swap} />
      <Banner
        h1="O melhor lugar para organizar os seus animes e mangas"
        span="Explore e ilumine o seu caminho de diversão com uma variedade imensa de animes e mangas"
        btn="Cadastre-se"
        show={true}
      />
      <CarroselDefault
        pagina="1"
        listTitle="Animes da temporada"
        uri="temporada?"
        tipoIntegracao="animes"
        loginModal={loginModal}
      />

      <GenderHome />

      <CarroselDefault
        pagina="1"
        listTitle="Animes atualizados recentemente"
        uri="em-trend?"
        tipoIntegracao="animes"
        loginModal={loginModal}
      />

      <BannerForum />

      <CarroselDefault
        pagina="1"
        listTitle="Mangas atualizados recentemente"
        uri="em-trend?"
        tipoIntegracao="mangas"
        loginModal={loginModal}
      />

      <CarroselDefault
        pagina="2"
        listTitle="Mangas mais lidos essa semana"
        uri="em-trend?"
        tipoIntegracao="mangas"
        loginModal={loginModal}
      />
    </>
  );
}
