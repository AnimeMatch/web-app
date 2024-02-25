import "../../../assets/css/infoProfile.css";
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";

export default function editProfile() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        profileImage: "",
        coverImage: "",
        criacao: "",
        status: true,
        genero: "",
        bio: ""
    });
    const [image, setImage] = useState();

    useEffect(() => {
    apiUser
        .get(`/users/user?email=${sessionStorage.email}`)
        .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setGender(response.data.genero)
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
  
                    <span>{user.genero}</span>
                    {/* <span>Teste</span> */}
                  </div>
  
                  <div className="date-started">
                    <span>Entrou em {user.criacao}</span>
                  </div>
                </div>
  
                <div className="description">
                  <span>BIO</span>
                  <div className="text">
                    <span>
                      {user.bio}
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