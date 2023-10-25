import Navbar from "../components/Navbar"
import "../assets/css/logoutPage.css"
import { useNavigate } from 'react-router-dom';

export default function logoutPage(){
    const username = sessionStorage?.getItem('usuario');
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('usuario');
        navigate('/');
    }
    return (
        <>
            <Navbar/>
            <div className="msgTest">
                <div>
                <h1>Bem vindo ao teste da Anime Match</h1>
                <h2>{username}</h2>
                </div>
                <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}