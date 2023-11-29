import CarroselHome from "../components/CarroselHome";
import Banner from "../components/Banner"
import BannerForum from "../components/BannerForum"
import GenderHome from "../components/GenderHome";
import Footer from "../components/Footer";

export default function Home(){
    return (
        <>    
        <Banner
          h1="O melhor lugar para organizar os seus animes e mangas"
          span="Explore e ilumine o seu caminho de diversão com uma variedade imensa de animes e mangas"
          btn="Cadastre-se"
          show={true}
        />
        <CarroselHome
          pagina="1" 
          listTitle="Animes da temporada"
          uri="temporada?"       
        />

        <GenderHome/>
        
        <CarroselHome
          pagina="1"
          listTitle="Animes atualizados recentemente"
          uri="em-trend?"
        />

        <BannerForum/>
        
        <CarroselHome
          pagina="3"  
          listTitle="Mangas atualizados recentemente"
          uri="temporada?"     
        />
        
        <CarroselHome
          pagina="4"  
          listTitle="Mangas mais lidos essa semana"
          uri="temporada?"     
        />
        </>
    )
}