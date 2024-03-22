import React from "react";
import classes from './Toolbar.module.css';
import DrawerToggler from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () =>{
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
}
export default Toolbar;