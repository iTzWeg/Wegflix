import React from 'react';
import Button from '../Button/index';
import Logo from './../../assets/Logo.png';
import './Menu.css';

function Menu() {
 return (
     <nav className="Menu">
         <a href="/">
            <img  className="Logo" src={Logo} alt="WegFlix logo"/>
        </a>
        <Button as="a" className="ButtonLink" href="/" >
            Novo Video
        </Button>
    </nav>
 );
}
export default Menu;
