import "../assets/css/statusBar.css";

export default function StatusBar() {
  return (
    <>
      <div className="status-container">
            <div className="option">
                <div className="title">
                    <div className="image progress"></div>
                    <span>Em progresso</span>
                </div>
                <span>0</span>
            </div>
            <div className="option">
                <div className="title">
                    <div className="image complete"></div>
                    <span>Completo</span>
                </div>
                <span>0</span>
            </div>
            <div className="option">
                <div className="title">
                    <div className="image on-hold"></div>
                    <span>Em espera</span>
                </div>
                <span>0</span>
            </div>
            <div className="option">
                <div className="title">
                    <div className="image dropp"></div>
                    <span>Dropados</span>
                </div>
                <span>0</span>
            </div>
            <div className="option">
                <div className="title">
                    <div className="image on-plan"></div>
                    <span>No plano</span>
                </div>
                <span>0</span>
            </div>
      </div>
    </>
  );
}
