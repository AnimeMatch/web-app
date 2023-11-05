import Navbar from "../components/Navbar";
import CarroselHome from "../components/CarroselHome";

export default function Home(){
    return (
        <>
        <Navbar/>
        <CarroselHome
          nomeLista="musicas" 
          listTitle="Mangas atualizados recentemente"         
        />
        <CarroselHome
          nomeLista="gatos"          
          listTitle="Mangas mais lidos essa semana"
        />
        <CarroselHome
          nomeLista="musicas" 
          listTitle="Mangas atualizados recentemente"         
        />
        </>
    )
}