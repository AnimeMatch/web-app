import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';

export default function logoutPage(){
    const username = sessionStorage?.getItem('usuario');
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('usuario');
        navigate('/Main');
    }
    return (
        <>
            <Navbar/>
            <h1>Bem vindo ao teste da Anime Match</h1>
            <h2>{username}</h2>
            <button
            onClick={logout}>
                Logout
            </button>
        </>
    )
}