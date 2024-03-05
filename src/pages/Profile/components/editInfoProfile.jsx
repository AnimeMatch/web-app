import "../../../assets/css/editInfoProfile.css";
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";
import InfoProfile from "./InfoProfile"
import mais from "../../../assets/images/deafault/mais.svg"
import ModalAlteracaoPendente from "../../../components/Modais/ModalAlteracaoPendente";

export default function editInfoProfile() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    profileImage: "",
    coverImage: "",
    criacao: "",
    genero: "",
    bio: ""
  });
  const [image, setImage] = useState("");
  const [editavel, setEditavel] = useState(true);
  const [atentionStyle, setAtentionStyle] = useState('')

  const [nameUpdate, setNameUpdate] = useState(user.name)
  const [profileImageUpdate, setProfileImageUpdate] = useState(user.profileImage)
  const [generoUpdate, setGeneroUpdate] = useState(user.genero)
  const [bioUpdate, setBioUpdate] = useState(user.bio)

  const [modalAlteracaoOpen, setModalAlteracaoOpen] = useState(false);

  const openModalAlteracao = () => {
    setModalAlteracaoOpen(true);
  };

  const closeModalAlteracao = () => {
    setModalAlteracaoOpen(false);
  };

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

  const handleNomeChange = (event) => {
    setNameUpdate(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGeneroUpdate(event.target.value);
  };

  const handleBioChange = (event) => {
    setBioUpdate(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleBioChange();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <>
    {editavel &&
      <div className="banner">
        <div className="user-info">
          <div className="bg">
            <div
              className="image-profile-edit"
              type="image"
              style={{ backgroundImage: 
                (`url("${user.profileImage}")`), 
                backgroundSize: "cover" }}
            >
              <div className="plus-image" 
              type="image" 
              style={{backgroundImage: (`url("${mais}")`), 
              backgroundSize: "cover" }}></div>
            </div>
            <div className="info-user">
              <div className="padding">
                <div className="name-gender">
                  <div className="name">
                    <input placeholder={sessionStorage.usuario} 
                    className="input-name-edit input-edit-geral"
                    maxLength={22}
                    value={nome}
                    onChange={handleNomeChange}
                    />
                    <button className="save-button edit-button"
                      onClick={() =>
                        setEditavel(false)}>save
                      {/* <div className="edit-image"></div> */}
                    </button>
                    <button 
                    className="cancel-button edit-button"
                    onClick={() => calcelarEdicao()}>
                      cancel</button>
                  </div>
                  {/* <span>{user.genero}</span> */}
                  <input type="text" 
                  placeholder={user.genero} 
                  className="input-edit-geral"
                  value={genero}
                  onChange={handleGeneroChange}
                  />
                </div>

                <div className="date-started">
                  <span>Entrou em {user.criacao}</span>
                </div>
              </div>

              <div className="description">
                <span>BIO</span>
                <div className="text-bio">
                  <textarea placeholder={user.bio} 
                  class="text-area-bio-edit input-edit-geral" 
                  rows="2"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  maxLength={200}
                  value={bio}
                  ></textarea>
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
    {
      < ModalAlteracaoPendente 
      isOpen={modalAlteracaoOpen} 
      openAlteracaoModal={openModalAlteracao} 
      closeAlteracaoModal={closeModalAlteracao}
      user={user}
      nameUpdate={nameUpdate}
      profileImageUpdate={profileImageUpdate}
      generoUpdate={generoUpdate}
      bioUpdate={bioUpdate}
      />
    }
    </>
  );
}