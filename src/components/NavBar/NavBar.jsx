import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import SearchBar from "../SearchBar";
import styles from './NavBar.module.scss';


const Nav = (props) => {
    const {  signOut,} = props;
    
    
    return (
        <nav className={styles.nav}>
     
            <h1>Punk Api</h1>
             <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default Nav;