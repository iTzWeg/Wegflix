import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/index';
import Logo from './../../assets/Logo.png';
import './Menu.css';

function Menu() {
 return (
     <nav className="Menu">
         <Link to="/">
            <img  className="Logo" src={Logo} alt="WegFlix logo"/>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video" >
            Novo Video
        </Button>
    </nav>
 );
}
export default Menu;
