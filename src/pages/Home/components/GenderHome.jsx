import React from 'react';
import { Link } from "react-router-dom";
import "../../../assets/css/genderHome.css";
import "../../../assets/css/responsive/genderHomeTablet.css";

export default function GenderHome() {
  return (
    <>
      <div className="container-4">
        <div className="option-gender">
          <div className="image-gender shounen"></div>
            <span>
              <Link to={{ pathname: "/search/anime/", search: "?genero=adventure" }} className="link">
                Adventure
              </Link>
            </span>
        </div>
        <div className="option-gender">
          <div className="image-gender shoujo"></div>
          <span>
            <Link to={{ pathname: "/search/anime/", search: "?genero=romance" }} className="link">
              Romance
            </Link>
          </span>
        </div>
        <div className="option-gender">
          <div className="image-gender seinen"></div>
          <span>
            <Link to={{ pathname: "/search/anime/", search: "?genero=drama" }} className="link">
              Drama
            </Link>
          </span>
        </div>
        <div className="option-gender">
          <div className="image-gender isekai"></div>
          <span>
            <Link to={{ pathname: "/search/anime/", search: "?genero=comedy" }} className="link">
              Comedy
            </Link>
          </span>
        </div>
        <div className="option-gender">
          <div className="image-gender slice-of-life"></div>
          <span>
            <Link to={{ pathname: "/search/anime/", search: "?genero=slice of life" }} className="link">
              Slice of life
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
