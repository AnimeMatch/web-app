import "../../../assets/css/comment.css";
import like from "../../../assets/images/deafault/gostar(1) 1.svg";
import deslike from "../../../assets/images/deafault/desgostar(1) 1.svg";
import chat from "../../../assets/images/deafault/bate-papo 2.svg";

export default function Comment(props) {
  return (
    <>
      <div className="comment-box">
        <div className="comment-title">
          <div className="comment-title-left">
            <div className="circle-image">
              <img src={props.image} alt="" />
            </div>
            <span className="comment-name">{props.name}</span>
            <div className="comment-childrens">
              <img src={chat} alt="" />
              <span className="comment-childrens-total">{props.replies}</span>
            </div>
          </div>
          <span className="comment-date">{props.date}</span>
        </div>
        <div className="comment-content">
          <span className="comment-text">{props.text}</span>
        </div>
        <div className="comment-footer">
          <div className="comment-reviews">
            <div className="comment-like">
              <img src={like} alt="" />
              <span className="comment-like-total">{props.liked}</span>
            </div>
            <div className="comment-deslike">
              <img src={deslike} alt="" />
              <span className="comment-deslike-total">{props.desliked}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
