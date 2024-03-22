import React from "react";
import logo from '../assests/images/logo-burger.png';
import classes from './Logo/Logo.module.css';

const Logo = (props) =>{
    <div className={classes.logo}>
        <img src={logo} alt="BurgerLogo" />
    </div>
}
export default Logo;