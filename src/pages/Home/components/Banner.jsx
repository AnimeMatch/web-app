import { Link } from "react-router-dom";
import "../../../assets/css/banner.css";
import "../../../assets/css/responsive/bannerTablet.css";

export default function Banner(props) {
  const toggleMenu = () => {
    if (!sessionStorage.authToken) {
      props.registerModal();
    }
  }
  return (
    <>
      <div className="container">
        <div className="bg">
          <div className="conteudo">
            <h1>{props.h1}</h1>
            <span>{props.span}</span>
            {sessionStorage.authToken ? (
              <Link to={"../search/anime/"}>
              <button onClick={toggleMenu}>{props.btn}</button></Link>
            ):(
              props.show && <button onClick={toggleMenu}>{props.btn}</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
