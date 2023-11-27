import "../assets/css/footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-5">
        <div className="content">
          <div className="navgation">
            <h3>Navegação</h3>
            <span>Anime</span>
            <span>Manga</span>
            <span>Fórum</span>
            <span>Listas</span>
          </div>
          <div className="contact">
            <h3>Contato</h3>
            <div className="social youtube">
              <div className="image-icon"></div>
              <span>Youtube</span>
            </div>
            <div className="social facebook">
              <div className="image-icon"></div>
              <span>Facebook</span>
            </div>
            <div className="social rip-twitter">
              <div className="image-icon"></div>
              <span>Twitter</span>
            </div>
            <div className="social instagram">
              <div className="image-icon"></div>
              <span>Instagram</span>
            </div>
            <div className="social tiktok">
              <div className="image-icon"></div>
              <span>TikTok</span>
            </div>
          </div>
          <div className="help">
            <h3>Ajuda</h3>
            <span>FAQ</span>
            <span>Termo de uso</span>
            <span>Politica de privacidade</span>
          </div>
          <div className="acount">
            <h3>Conta</h3>
            <span>Cadastrar</span>
            <span>Logar</span>
          </div>
        </div>
        <div className="logo">
          <div className="logo-footer"></div>
          <span>Anime Match</span>
        </div>
      </div>
    </>
  );
}
