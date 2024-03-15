import "../../../assets/css/infoProfile.css";
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";

export default function InfoProfile() {
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    apiUser
      .get(`/users/user?email=${sessionStorage.email}`)
      .then((response) => {
        setUser(response.data);
        setImage(`url("${response.data.profileImage}")`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="banner">
        <div className="user-info">
          <div className="bg">
            <div
              className="image-profile"
              style={{ backgroundImage: image, backgroundSize: "cover" }}
            ></div>
            <div className="info-user">
              <div className="padding">
                <div className="name-gender">
                  <div className="name">
                    <span>{sessionStorage.usuario}</span>
                    <button>
                      <div className="edit-image"></div>
                    </button>
                  </div>

                  <span>Feminino</span>
                </div>

                <div className="date-started">
                  <span>Entrou em Setembro de 2023</span>
                </div>
              </div>

              <div className="description">
                <span>BIO</span>
                <div className="text">
                  <span>
                    Olá, sou Fulano, e adoro animes e mangas, como é bom ter
                    esse site para usar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
