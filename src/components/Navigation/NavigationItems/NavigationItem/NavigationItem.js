import react from 'react'
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';
const NavigationItem = (props) =>{
    <li className={classes.navigationItem}>
        <NavLink to={props.link} exact activeClassName={classes.active}>{props.children}</NavLink>

    </li>
}
export default  NavigationItem; 