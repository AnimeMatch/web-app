import CarroselDefault from "../../components/Carrosel/CarroselDefault";
import Banner from "./components/Banner";
import BannerForum from "./components/BannerForum";
import GenderHome from "./components/GenderHome";

export default function Home() {
  return (
    <>
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
      />

      <GenderHome />

      <CarroselDefault
        pagina="1"
        listTitle="Animes atualizados recentemente"
        uri="em-trend?"
        tipoIntegracao="animes"
      />

      <BannerForum />

      <CarroselDefault
        pagina="1"
        listTitle="Mangas atualizados recentemente"
        uri="em-trend?"
        tipoIntegracao="mangas"
      />

      <CarroselDefault
        pagina="2"
        listTitle="Mangas mais lidos essa semana"
        uri="em-trend?"
        tipoIntegracao="mangas"
      />
    </>
  );
}
