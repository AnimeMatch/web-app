import "../assets/css/banner.css"

export default function Banner(props){
    return(
        <>
        <div className="container">
            <div className="bg">
                <div className="conteudo">
                    <h1>{props.h1}</h1>
                    <span>{props.span}</span>
                    {props.show &&
                    <button>{props.btn}</button>
                    }
                </div>
            </div>
        </div>
            
        </>
    )
}