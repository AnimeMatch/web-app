import CarroselHome from "../components/CarroselHome";
import Banner from "../components/Banner"
import BannerForum from "../components/BannerForum"
import GenderHome from "../components/GenderHome";
import Footer from "../components/Footer";

export default function Home(){
    return (
        <>    
        <Banner/>
        <CarroselHome
          pagina="1" 
          listTitle="Animes da temporada"       
        />

        <GenderHome/>
        
        <CarroselHome
          pagina="2"
          listTitle="Animes atualizados recentemente"
        />

        <BannerForum/>
        
        <CarroselHome
          pagina="3"  
          listTitle="Mangas atualizados recentemente"     
        />
        
        <CarroselHome
          pagina="4"  
          listTitle="Mangas mais lidos essa semana"     
        />
        </>
    )
}