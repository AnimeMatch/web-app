export default function Post (props) {
    return (
        <div className="trend-post">
            <div className="user-image-post"
                  style={{background: (`url("${props.userImage}")`), 
                  backgroundSize: "cover"}} />
            <div className="texts-post">
                <span className="titulo-post">{props.content}</span>
                <span className="content-post">{props.profileImage}</span>
            </div>
        </div>
    )
}