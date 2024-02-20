import "../../../assets/css/card.css";

export default function CardCharacter(props) {
  return (
    <div className="cardContent">
      <div className="cardImage">
        <img src={props.image} alt="" />
      </div>
      <div className="cardTitle">
        <span>{props.title}</span>
      </div>
    </div>
  );
}
