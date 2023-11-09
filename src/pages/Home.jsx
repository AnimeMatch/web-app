import Navbar from "../components/Navbar";
import CarroselHome from "../components/CarroselHome";

export default function Home(){
    return (
        <>
        <Navbar/>
        <CarroselHome
          pagina="1"
          nomeLista="musicas" 
          listTitle="Mangas atualizados recentemente"         
        />
        <CarroselHome
          pagina="2"
          nomeLista="gatos"          
          listTitle="Mangas mais lidos essa semana"
        />
        <CarroselHome
          pagina="3"
          nomeLista="musicas" 
          listTitle="Mangas atualizados recentemente"         
        />
        </>
    )
}