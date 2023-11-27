import "../assets/css/infoProfile.css";

export default function InfoProfile() {

  return (
    <>
      <div className="banner">
        <div className="user-info">
          <div className="bg">
            <div className="image-profile"></div>

            <div className="info-user">
              <div className="padding">
                <div className="name-gender">
                  <div className="name">
                    <span>Username</span>
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
                    hrfdbajudhadhjilasjdislajdislajdilsajdisajdisajdiasjdisajdiosajd
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
