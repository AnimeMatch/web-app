export default function Topico (props) {
    return (
        <>
        <div className="topico-body">
            <div className="top-topico">
                <div className="user-image-topico"
                  style={{background: (`url("${props.userImage}")`), 
                  backgroundSize: "cover"}} />
            </div>
            
        </div>
        </>
    );  
}