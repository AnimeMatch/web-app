import "../../assets/css/modalAlteracao.css"
import "../../assets/css/editInfoProfile.css";
import atentionImage from "../../assets/images/deafault/atentionImage.svg"
import { useState } from "react";

export default function ModalAlteracaoPendente(props){
    const [atentionPanelOpen, setAtentionPanel] = useState(false)
    function salvarEdicao (){
        const [userUpdate, setUserUpdate] = useState({
            id: props.user.id,
            name: props.nameUpdate,
            password: None,
            profileImage: props.profileImageUpdate,
            coverImage: None,
            genero: props.generoUpdate,
            bio: props.bioUpdate
        })

        const token = sessionStorage.authToken;
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        useEffect(() => {
            apiUser
              .put(`/users/`, userUpdate, config)
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(response)
              })
              .catch((error) => {
                if (error.response) {
                    if (error.response.status === 200) {
                        // card de requisição bem sucedida
                    }
                }
                console.log(error);
              });
          }, []);

        useEffect(() => {
            apiUser
              .get(`/users/user?email=${sessionStorage.email}`)
              .then((response) => {
                setUser(response.data);
                setGender(response.data.genero)
                setImage(`url("${response.data.profileImage}")`);
              })
              .catch((error) => {
                console.log(error);
              });
          }, [user.profileImage]);
        setEditavel(false)
        setAtentionStyle(hide)
    }

    function calcelarEdicao () {
        // Volta a edição do perfil
    }

    // const hide = {
    //     display: !atentionPanelOpen ? "display": none
    // }
    
    return (
        {props.isOpen && (
            <div className="atention-painel-principal">
                <div className="atention-image-area">
                    <div className="atention-image"
                    style={{background: (`url("${atentionImage}")`), 
                    backgroundSize: "couver"}}>
                    </div>
                </div>
                <div className="text-content">
                    <span className="title-atention">Alterações pendentes!</span>
                    <span className="simple-text-atention">Você fez alterações nessa página e não salvou</span>
                    <span className="simple-text-atention">deseja realmente sair sem salvar?</span>
                </div>
                <div className="buttons-area">
                    <button 
                        className="cancel-button edit-button"
                        onClick={() => calcelarEdicao()}>
                            cancel
                    </button>
                    <button className="save-button edit-button"
                        onClick={() =>
                            salvarEdicao()}>
                            sair
                    </button>
                </div>
            </div>)
        }

    );
}