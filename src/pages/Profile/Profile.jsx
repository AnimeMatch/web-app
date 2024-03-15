import CardListCustomizad from "./components/CardListCustomized";
import CarroselProfileManga from "./components/CarroselProfileManga";
import CarroselProfileAnime from "./components/CarroselProfileAnime";
import InfoProfile from "./components/InfoProfile";
import StatusBar from "./components/StatusBar";

export default function Profile() {
  return (
    <>
      <InfoProfile></InfoProfile>
      <StatusBar />
      {/* <CardListCustomizad/> */}
      <CarroselProfileAnime />
      <CarroselProfileManga />
    </>
  );
}
