import CardListCustomizad from "./components/CardListCustomized";
import CarroselProfile from "./components/CarroselProfile";
import InfoProfile from "./components/InfoProfile";
import StatusBar from "./components/StatusBar";

export default function Profile() {
  return (
    <>
      <InfoProfile></InfoProfile>
      <StatusBar />
      {/* <CardListCustomizad/> */}
      <CarroselProfile />
    </>
  );
}
