import Navbar from "../components/Navbar";
import CarroselHome from "../components/CarroselHome";

export default function Home(){
    return (
        <>
        <Navbar/>
        <CarroselHome
          pagina="1" 
          listTitle="Animes mais curtidos de todos os tempos"       
        />
        <CarroselHome
          pagina="2"
          listTitle="Animes lançados na semana"
        />
        <CarroselHome
          pagina="3"  
          listTitle="Melhores animes da temporada"     
        />
        </>
    )
}