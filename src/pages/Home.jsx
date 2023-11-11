import Navbar from "../components/Navbar";
import CarroselHome from "../components/CarroselHome";
import Banner from "../components/Banner"

export default function Home(){
    return (
        <>
        <Navbar/>      
        <Banner/>
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