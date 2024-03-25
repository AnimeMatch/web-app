import CarroselProfileManga from "./components/CarroselProfileManga";
import CarroselProfileAnime from "./components/CarroselProfileAnime";
import InfoProfile from "./components/InfoProfile";
import StatusBar from "./components/StatusBar";
import CarroselDefault from "../../components/Carrosel/CarroselDefault";
import { useEffect, useState } from "react";
import apiUser from "../../apiUser";

export default function Profile() {
  const [favAnime, setFavAnime] = useState();
  const [favManga, setFavManga] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiUser.get(
          `/lists/listas-usuario?email=${sessionStorage.email}`
        );
        let favLists = [];
        let lists = response.data;
        lists.forEach((list) => {
          if (list.name === "Favoritos") {
            favLists.push(list);
          }
        });
        setFavManga(favLists[1].id);
        setFavAnime(favLists[0].id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <InfoProfile></InfoProfile>
      <StatusBar />
      <CarroselDefault
        pagina="1"
        listTitle="Animes Favoritos"
        uri={favAnime}
        tipoIntegracao="animes"
        type={1}
        profile={true}
      />
      <StatusBar />
      <CarroselDefault
        pagina="1"
        listTitle="Mangas Favoritos"
        uri={favManga}
        tipoIntegracao="mangas"
        type={2}
        profile={true}
      />
      <CarroselProfileAnime />
      <CarroselProfileManga />
    </>
  );
}
