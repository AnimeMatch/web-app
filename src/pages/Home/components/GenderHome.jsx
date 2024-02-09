import "../../../assets/css/genderHome.css"
import "../../../assets/css/responsive/genderHomeTablet.css"

export default function GenderHome() {
  return (
    <>
      <div className="container-4">
        <div className="option-gender">
          <div className="image-gender shounen"></div>
          <span>Shounen</span>
        </div>
        <div className="option-gender">
          <div className="image-gender shoujo"></div>
          <span>Shoujo</span>
        </div>
        <div className="option-gender">
          <div className="image-gender seinen"></div>
          <span>Seinen</span>
        </div>
        <div className="option-gender">
          <div className="image-gender isekai"></div>
          <span>Isekai</span>
        </div>
        <div className="option-gender">
          <div className="image-gender slice-of-life"></div>
          <span>Slice of life</span>
        </div>
      </div>
    </>
  );
}
