// @flow strict

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import  icon  from '../public/image/logo.png';

function Header() {

    const [menuShow, setMenuShow] = useState("");
    const [menuButton, setMenuButton] = useState("fa-bars");

    const menuToggle = () => {
        setMenuButton((menuShow === "") ? "fa-close" : "fa-bars");
        setMenuShow((menuShow === "") ? "show" : "");
    }

    return (
        <header className='header-layout '>
            <div className='container flex-container --row --justify-between --align-center'>
                <div className='image'>
                    <img src={ icon } alt="icon" className='site-icon' />
                </div>
                <div className={ "navbar-component flex-container --row --justify-start --align-center " + menuShow }>
                    <Link  to="/" className='navbar-component--link' >Accueil</Link>
                    <Link  to="/apercu" className='navbar-component--link' >Aperçu</Link>
                    <Link  to="/notre-metier" className='navbar-component--link  active' >Notre Metier</Link>
                    <Link  to="/notre-equipe" className='navbar-component--link' >Notre Equipe</Link>
                    <Link  to="/notre-expertise" className='navbar-component--link' >Notre Expertise</Link>
                    <Link  to="/contacts" className='navbar-component--link' >Contacts</Link>
                    <Link  to="/connexion" className='navbar-component--link' >Se Connecter</Link>
                </div>
                <div className='navbar-btn'>
                    <i className={ "fa " + menuButton }  onClick={() => menuToggle()} ></i>
                </div>
            </div>
        </header>
    );
};

export default Header;