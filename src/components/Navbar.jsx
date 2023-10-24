import '../assets/css/navbar.css';
import logo from '../assets/images/logos/logoNavbar.png';
import imgLogin from '../assets/images/backgrounds/4258797 1.svg';
import imgRegister from '../assets/images/backgrounds/4302417 1.svg'; 
import facebookLogo from '../assets/images/logos/facebook 1.svg';
import googleLogo from '../assets/images/logos/search 1.svg';
import twitterLogo from '../assets/images/logos/twitter 1.svg';
import { useState } from 'react';

export default function Navbar(){

    const [modal, setModal] = useState(false);
    const [modal2,setModal2] = useState(false);

    const loginModal = () => {
        setModal(!modal)
    }

    const regsiterModal = () => {
        setModal2(!modal2)
    }

    const swap = () =>{
        setModal(!modal)
        setModal2(!modal2)
    }

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
                    <button className='btn-primary'
                    onClick={loginModal}
                     id='btn-login'>
                       <span id='login'> Login</span>
                    </button>
                    <button className='btn-secundary'
                    onClick={regsiterModal}>
                        <span>Cadastro</span>
                    </button>
                </div>
            </nav>
            {modal &&
                <div className="modal-login">
                    <div className="overlay-modal" onClick={loginModal}></div>
                    <div className="modal-content login">
                        <img src={imgLogin} alt="" id='loginImg'/>
                        <div className='modal-right-content'>
                            <span className="close" onClick={loginModal}>X</span>
                            <h1>Login</h1>
                            <form action="" method="post" className='form'>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="" id="" placeholder='email@example.com'/>
                                <span className='tinyText'><a href="" id='fEmail'>Esqueceu seu e-mail?</a></span>
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="" id=""placeholder='**************'/>
                                <div className='underLabel'>
                                    <div className="remember">
                                        <input type="checkbox" name="" id="" />
                                        <span className='tinyText'>Lembrar de mim</span>
                                    </div>
                                    <span className='tinyText'><a href="">Esqueceu sua senha?</a></span>
                                </div>
                                <button className='btn-secundary'> Login </button>
                                <div className="separate"></div>
                                <div className="register">
                                    <span id='topRegister'>Ou se conectar com</span>
                                    <div className="socialLogos">
                                        <img src={googleLogo} id='google' alt="google" />
                                        <img src={facebookLogo} id='facebook' alt="facebook" />
                                        <img src={twitterLogo} id='twitter' alt="twitter" />
                                    </div>
                                    <span id='botRegister'>Não tem conta ? <a id='registerBtn'
                                    onClick={swap}>Cadastre-se</a></span>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
            {modal2 &&
                <div className="modal-register">
                     <div className="overlay-modal" onClick={regsiterModal}></div>
                    <div className="modal-content login">
                        <img src={imgRegister} alt="" id='loginImg'/>
                        <div className='modal-right-content'>
                            <span className="close" onClick={regsiterModal}>X</span>
                            <h1>Cadastro</h1>
                            <form action="" method="post" className='form'>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="" id="" placeholder='email@example.com'/>
                                <label htmlFor="password">Nome de usuario</label>
                                <input type="password" name="" id=""placeholder='**************'/>
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="" id=""placeholder='**************'/>
                                <label htmlFor="password">Confirme sua Senha</label>
                                <input type="password" name="" id=""placeholder='**************'/>
                                <div className='underLabel'>
                                    <div className="remember">
                                        <input type="checkbox" name="" id="" />
                                        <span className='tinyText'>Sim, compreendo e concordo com os Termos de Serviços e Política de Privacidade do Anime Match.</span>
                                    </div>
                                </div>
                                <button className='btn-secundary'> Cadastrar </button>
                                <div className="separate"></div>
                                <div className="register">
                                    <span id='topRegister'>Ou se conectar com</span>
                                    <div className="socialLogos">
                                        <img src={googleLogo} id='google' alt="google" />
                                        <img src={facebookLogo} id='facebook' alt="facebook" />
                                        <img src={twitterLogo} id='twitter' alt="twitter" />
                                    </div>
                                    <span id='botRegister'>Não tem conta ? <a id='registerBtn'
                                    onClick={swap}>Cadastre-se</a></span>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}