import React from "react";
import classes from './DrawerToggle.module.css';

const DrawerToggler = (props)=>{
    <div onClick={props.clicked} className={classes.drawerToggler}>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default DrawerToggler;