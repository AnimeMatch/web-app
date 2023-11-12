import "../assets/css/card.css";
import { Link } from "react-router-dom";
export default function CardAnime(props){
    let redirect = "anime/"+ props.id;

    return(
      <Link to={redirect}>
        <div className="cardContent">
                <div className="cardImage">
                  <img src={props.image} alt="" />
                </div>
                <div className="cardTitle">
                  <span>{props.title}</span>
                </div>
        </div>
      </Link>
    )
        
}