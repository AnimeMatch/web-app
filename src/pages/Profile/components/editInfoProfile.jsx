import "../../../assets/css/editInfoProfile.css";
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";
import InfoProfile from "./InfoProfile"

export default function editInfoProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
    coverImage: "",
    criacao: "",
    genero: "",
    bio: ""
  });
  const [image, setImage] = useState("");
  const [editavel, setEditavel] = useState(true);

  useEffect(() => {
    apiUser
      .get(`/users/user?email=${sessionStorage.email}`)
      .then((response) => {
        // console.log(`USUARIO\n${response.data.profileImage}`);
        setUser(response.data);
        setGender(response.data.genero)
        setImage(`url("${response.data.profileImage}")`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.profileImage]);

  function teste() {
    console.log(image )
  }

  return (
    <>
    {editavel &&
      <div className="banner">
        <div className="user-info">
          <div className="bg">
            <div
              className="image-profile"
              type="image"
              style={{ backgroundImage: 
                (`url("${user.profileImage}")`), 
                backgroundSize: "cover" }}
            ></div>
            <div className="info-user">
              <div className="padding">
                <div className="name-gender">
                  <div className="name">
                    <input placeholder={sessionStorage.usuario} className="input-name-edit">
                    </input>
                    {/* <span>{sessionStorage.usuario}</span> */}
                    <button
                      onClick={() =>
                        setEditavel(false)
                      }
                    >
                      <div className="edit-image"></div>
                    </button>
                  </div>
                  <span>{user.genero}</span>
                </div>

                <div className="date-started">
                  <span>Entrou em {user.criacao}</span>
                </div>
              </div>

              <div className="description">
                <span>BIO</span>
                <div className="text">
                  <input placeholder={user.bio} className="input-bio-edit">
                  </input>
                  {/* <span>
                    {user.bio}
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    {
      !editavel &&
      <InfoProfile />
    }
    </>
  );
}