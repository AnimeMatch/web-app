export default function Post (props) {
    return (
        <div className="trend-post">
            <div className="user-image-post"
                  style={{background: (`url("${props.userImage}")`), 
                  backgroundSize: "cover"}} />
            <div className="texts-post">
                <span className="user-name-post">{props.name}</span>
                <span className="content-post">{props.content}</span>
            </div>
        </div>
    )
}