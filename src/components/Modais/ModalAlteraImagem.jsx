import { useState, useEffect } from "react";
import "../../assets/css/modalAlteraImagens.css"
import search from "../../assets/images/deafault/search.svg";
import api from "../../api";

export default function ModalAlteraImagem(props){
    const [searchValue, setSearchValue] = useState("");
    const [selectedImage, setSelectedImage] = useState();
    const [profileImages, setProfileImages] = useState();

    if (props.isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    const searchByName = (name) => {
        api
          .get(
            `/characters/busca-nome?nome=${name}`
          )
          .then((response) => {
            setProfileImages(response.data.media);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    useEffect(() => {
        api
            .get(`/characters/?page=1&qtdPaginas=50`)
            .then((response) => {
                setProfileImages(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
      },[])

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
          searchByName(searchValue);
        }
      };

    function salvarImagem(){
        console.log(selectedImage)
        let selected = profileImages.find(item => item.id === selectedImage)
        props.profileImageToSave(selected.image.large)
    }

    return (
        <>
        {props.isOpen &&
            <div className="images-modal-overlay">
                <div className="images-painel-principal">
                    <div className="top-things">
                        <span>Imagens para o seu perfil</span>
                        {/* <div className="input-search-profile">
                            <div
                                className="search-button-perfil"
                                onClick={() =>
                                searchByName(document.getElementById("input-profile").value)
                                }>
                                <img src={search} alt="" id="input-image" />
                            </div>
                            <input
                                type="text"
                                name=""
                                placeholder="Pesquisar"
                                id="input-profile"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={handleEnterKeyPress}
                            />
                        </div> */}
                    </div>
                    <div className="bottom-things">
                        <div className="perfil-images">
                            {profileImages &&
                                profileImages.map((item) => (
                                    <div className="card-anime-search-area" key={item.id}>
                                        <img src={item.image.large}
                                                alt=""
                                                className={item.id === selectedImage ? "image-item-selected" : "image-item-not-selected"}
                                                id={item.id}
                                                onClick={() => setSelectedImage(item.id)}
                                            />
                                    </div>
                                ))
                            }
                        </div>
                        <button 
                            className="save-button-image edit-button"
                            onClick={() => salvarImagem()}>
                            Salvar
                        </button>
                    </div>
                    <div className="x-fechar-modal"
                    onClick={props.closeModalImagem}>×</div>
                </div>
            </div> 
        }
        </>
    );

}