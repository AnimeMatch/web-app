import '../assets/css/navbar.css';
import logo from '../assets/images/logos/logoNavbar.png';
import { useState } from 'react';

export default function Navbar(){

    const [logged, setLogged] = useState(false);

    return (
        <>
            <nav className='navbar'>
                <div className="brandingArea">
                    <img src={logo} alt="" />
                    <span id='title'>Anime Match</span>
                </div>
                <div className="navigationItens">
                    <ol className='navList'>
                        <li>Anime</li>
                        <li>Manga</li>
                        <li>Forum</li>
                    </ol>
                </div>
                <div className='userArea'>
                    <button className='btn-primary' id='btn-login'>
                       <span id='login'> Login</span>
                    </button>
                    <button className='btn-secundary'>
                        <span>Cadastro</span>
                    </button>
                </div>
            </nav>
        </>
    )
}