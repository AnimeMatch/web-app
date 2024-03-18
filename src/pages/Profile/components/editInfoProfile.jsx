import "../../../assets/css/editInfoProfile.css";
import { useState, useEffect } from "react";
import apiUser from "../../../apiUser";
import InfoProfile from "./InfoProfile"
import mais from "../../../assets/images/deafault/mais.svg"
import ModalAlteracaoPendente from "../../../components/Modais/ModalAlteracaoPendente";
import ModalAlteraImagem from "../../../components/Modais/ModalAlteraImagem";

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
  const [editavel, setEditavel] = useState(true);
  const [atentionStyle, setAtentionStyle] = useState('')

  const [nameUpdate, setNameUpdate] = useState(null)
  const [profileImageUpdate, setProfileImageUpdate] = useState(null)
  const [generoUpdate, setGeneroUpdate] = useState(null)
  const [bioUpdate, setBioUpdate] = useState(null)

  const [modalAlteracaoOpen, setModalAlteracaoOpen] = useState(false);
  const [modalImagemOpen, setModalImagemOpen] = useState(false);

  function buscaUser(){
    apiUser
      .get(`/users/user?email=${sessionStorage.email}`)
      .then((response) => {
        // console.log(`USUARIO\n${response.data.profileImage}`);
        setUser(response.data);
        // setImage(`url("${response.data.profileImage}")`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    apiUser
        .get(`/users/user?email=${sessionStorage.email}`)
        .then((response) => {
          // console.log(`USUARIO\n${response.data.profileImage}`);
          setUser(response.data);
          // setImage(`url("${response.data.profileImage}")`);
        })
        .catch((error) => {
          console.log(error);
        });
  },[])

  function salvarEdicao (){
    if (nameUpdate || profileImageUpdate || generoUpdate || bioUpdate){
      apiUser
      .put(`/users/`, 
      {
        id: user.id,
          name: nameUpdate,
          // password: null,
          profileImage: profileImageUpdate,
          // coverImage: null,
          genero: generoUpdate,
          bio: bioUpdate
      })
      .then((response) => {
          console.log("\nUSER EDITADO COM SUCESSO\n")
          console.log(response)
            // card de requisição bem sucedida
        })
        .catch((error) => {
            console.log(`\nFALHA AO EDITAR USUÁRIO. ERRO:\n`)
            console.log(error.response)
            // card de requisição mal sucedida
      });
      // buscaUser()
    }
    setEditavel(false)
  }

  const handleNomeChange = (event) => {
    setNameUpdate(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGeneroUpdate(event.target.value);
  };

  const handleBioChange = (event) => {
    setBioUpdate(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const cancelaEdicao = () => {
    if (nameUpdate || profileImageUpdate || generoUpdate || bioUpdate){
      openModalAlteracao()
    } else {
      fecharEdicao()
    }
  }

  const openModalAlteracao = () => {
    setModalAlteracaoOpen(true);
  };

  const closeModalAlteracao = () => {
    setModalAlteracaoOpen(!modalAlteracaoOpen);
  };

  const profileImageToSave = (valor) => {
    setProfileImageUpdate(valor)
    console.log(valor)
    closeModalImagem()
    document.body.style.overflow = 'auto';
  }
  
  const fecharEdicao = () => {
    setModalAlteracaoOpen(false)
    setEditavel(!editavel)
  }
  
  const closeModalImagem = () => {
    setModalImagemOpen(!modalImagemOpen);
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
              backgroundSize: "cover" }}
              onClick={() => setModalImagemOpen(!modalImagemOpen)}
              ></div>
            </div>
            <div className="info-user">
              <div className="padding">
                <div className="name-gender">
                  <div className="name">
                    <input placeholder={user.name} 
                    className="input-name-edit input-edit-geral"
                    maxLength={22}
                    onChange={handleNomeChange}
                    />
                    <button className="save-button edit-button"
                      onClick={() =>
                        salvarEdicao()}>salvar
                    </button>
                    <button 
                    className="cancel-button edit-button"
                    onClick={() => cancelaEdicao()}>
                      cancelar</button>
                  </div>
                  <input type="text" 
                  placeholder={user.genero} 
                  className="input-edit-geral"
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
                  className="text-area-bio-edit input-edit-geral" 
                  rows="2"
                  onChange={handleBioChange}
                  onKeyDown={handleKeyDown}
                  maxLength={200}
                  // value={bio}
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
    <ModalAlteracaoPendente
      isOpen={modalAlteracaoOpen}
      closeModalAlteracao={closeModalAlteracao}
      fecharEdicao={fecharEdicao}
    />

    <ModalAlteraImagem
      isOpen={modalImagemOpen}
      closeModalImagem={closeModalImagem}
      profileImageToSave={profileImageToSave}
    />
    </>
  );
}