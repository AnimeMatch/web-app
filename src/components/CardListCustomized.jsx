import "../assets/css/cardCustom.css";
import apiUser from "../apiUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardListCustomizad() {
  const [getList, setList] = useState([]);
  const [image0, setImage0] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  
  useEffect(() => {
    apiUser
      .get(`/anime-lista/animes-da-lista?listaId=2`)
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const setImages = ()=> {
    setImage0(getList[0].imagem);
    setImage1(getList[1].imagem);
    setImage2(getList[2].imagem);
    setImage3(getList[3].imagem);
    setImage4(getList[0].imagem);
  }

  useEffect(() => {
    if (getList.length > 0) {
      setImages();
       stop
    }
  }, [getList]);


  const cardStyle = {
    style0: {
      backgroundImage: `url(${image0})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    style1: {
      backgroundImage: `url(${image1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    style2: {
      backgroundImage: `url(${image2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    style3: {
      backgroundImage: `url(${image3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    style4: {
      backgroundImage: `url(${image4})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  };

  return (
    <>
      <div className="card-container">
        <div className="title-type">
          <div className="name-list">
            <h3>Nome lista</h3>
            <span>Tipo</span>
          </div>
          <div className="add-custom"></div>
        </div>
          <div className="card-list">
            <div className="nth-small" style={cardStyle.style0}></div>
            <div className="nth-mid" style={cardStyle.style1}></div>
            <div className="nth-big" style={cardStyle.style2}></div>
            <div className="nth-mid" style={cardStyle.style3}></div>
            <div className="nth-small" style={cardStyle.style4}></div>
          </div>
        <div className="line"></div>
        <div className="profile-list">
          <div className="user">
            <div className="image"></div>
            <span>Nome ususario</span>
          </div>
          <div className="interaction">
            <div className="btn-int">
              <button className="like"></button>
              <span>0</span>
            </div>
            <div className="btn-int">
              <button className="favorite"></button>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
