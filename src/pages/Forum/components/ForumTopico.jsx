export default function Topico (props) {
    return (
        <>
        <div className="topico-body">
            <div className="top-topico">
                <div className="user-image-topico"
                  style={{background: (`url("${props.userImage}")`), 
                  backgroundSize: "cover"}} />
                  <div className="topico-texts">
                    <span className="user-name-topico">{props.userName}</span>
                    <span className="content-text-topico">{props.topicoContent}</span>
                  </div>
            </div>
            <div className="image-topico">
                
            </div>
        </div>
        </>
    );  
}